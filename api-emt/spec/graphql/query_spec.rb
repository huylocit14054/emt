require 'rails_helper'

RSpec.describe EnhanceUrlTaggingSchema do
  fixtures :all
  let(:context) { { current_user: users(:loc) } }
  let(:variables) { {} }
  # Call `result` to execute the query
  let(:result) do
    res = EnhanceUrlTaggingSchema.execute(
      query_string,
      context: context,
      variables: variables
    )
    # Print any errors
    pp res if res['errors']
    res
  end

  # test query currentUser
  describe 'currentUser' do
    # provide a query string for `result`
    let(:query_string) { %(query { currentUser { username } }) }
    context "when there's no current user" do
      # override `context`
      let(:context) { {} }
      it 'is nil' do
        # calling `result` executes the query
        expect(result['data']['currentUser']).to eq(nil)
      end
    end

    context "when there's a current user" do
      # override `context`
      let(:context) { { current_user: users(:loc) } }
      it "shows the user's name" do
        user_name = result['data']['currentUser']['username']
        expect(user_name).to eq('loc')
      end
    end
  end

  # test query users
  describe 'users' do
    let(:query_string) { %(query { users { username }}) }
    let(:result_name) do
      result_name = []
      result['data']['users'].each { |name| result_name << name['username'] }
      result_name
    end

    it 'return all the users without the current user' do
      expected_name = ['nhat', 'phat', 'thuy']
      expect(result_name).to match_array(expected_name)
    end

    it 'dose not include the current user in the return' do
      expect(result_name).not_to include('loc')
    end
  end

  # test query to get all the projects which have the PA is the current user
  describe 'projectsAsAdminOfCurrentUser' do
    let(:query_string) { %(query { projectsAsAdminOfCurrentUser { id name }}) }
    let(:result_names) do
      result_names = []
      result['data']['projectsAsAdminOfCurrentUser'].each { |project| result_names << project['name'] }
      result_names
    end
    let(:result_ids) do
      result_ids = []
      result['data']['projectsAsAdminOfCurrentUser'].each { |project| result_ids << project['id'].to_i }
      result_ids
    end
    let(:expected_names) { ['First project', 'Second project'] }
    let(:expected_names_without_order) { ['Second project', 'First project'] }
    let(:expected_project_ids) do
      result_ids = []
      ProjectMember.where(
        user_id: users(:loc).id,
        role: 'project_admin'
      ).order(created_at: :desc).each { |record| result_ids << record.project_id }
      result_ids
    end
    it 'return all the projects which have the current user as Admin' do
      expect(result_names).to match_array(expected_names)
      expect(result_ids).to match_array(expected_project_ids)
    end
    it 'return all the projects which have the current user as Admin with correct order' do
      expect(result_names).to match_array(expected_names_without_order)
    end
  end
end
