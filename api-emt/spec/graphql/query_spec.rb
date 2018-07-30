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
    let(:result_names) do
      result_name = []
      result['data']['users'].each { |name| result_name << name['username'] }
      result_name
    end
    let(:expected_names) do
      expected_names = []
      User.where.not(
        id: users(:loc).id
      ).order(created_at: :desc).each { |user| expected_names << user.username }
      expected_names
    end

    it 'return all the users without the current user' do
      expect(result_names).to match_array(expected_names)
    end

    it 'does not include the current user in the return' do
      expect(result_names).not_to include('loc')
    end
  end

  # test query to get all the projects which have the PA is the current user
  describe 'projectsAsAdminOfCurrentUser' do
    let(:query_string) do
      %|
        query($companyId: ID!) {
          projectsAsAdminOfCurrentUser(companyId: $companyId)
          {
            id
            name
          }
        }
      |
    end
    let(:variables) { { 'companyId' => companies(:company_one).id.to_s } }
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
        company_member_id: company_members(:c1_member_loc).id,
        role: ProjectMember::ROLE_PROJECT_ADMIN
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

  # test query to get all the projects which have a member is the current user
  describe 'projectsAsMemberOfCurrentUser' do
    let(:query_string) do
      %|query($companyId: ID!)
        { projectsAsMemberOfCurrentUser(companyId: $companyId)
          {
            id
            name
          }
        }
      |
    end
    let(:variables) { { 'companyId' => companies(:company_one).id.to_s } }
    let(:result_names) do
      result_names = []
      result['data']['projectsAsMemberOfCurrentUser'].each { |project| result_names << project['name'] }
      result_names
    end
    let(:result_ids) do
      result_ids = []
      result['data']['projectsAsMemberOfCurrentUser'].each { |project| result_ids << project['id'].to_i }
      result_ids
    end
    let(:expected_names) { ['Third project', 'Fourth project'] }
    let(:expected_names_without_order) { ['Fourth project', 'Third project'] }
    let(:expected_project_ids) do
      result_ids = []
      ProjectMember.where(
        company_member_id: company_members(:c1_member_loc).id,
        role: ProjectMember::ROLE_PROJECT_MEMBER
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

  describe 'usersSuggestion' do
    let(:query_string) do
      %|
        query($companyId: ID!, $query : String!) {
          usersSuggestion(companyId: $companyId, query: $query){
            username
            email
          }
        }
      |
    end
    let(:variables) { { 'companyId' => companies(:company_one).id.to_s, 'query' => 'ha' } }
    let(:expected_users) do
      [{ 'username' => 'phat', 'email' => 'phat@gmail.com' },
       { 'username' => 'nhat', 'email' => 'nhat@gmail.com' }]
    end
    it 'return the two users string \"ha\"' do
      expect(result['data']['usersSuggestion']).to match_array(expected_users)
    end
  end

  describe 'membersSuggestion' do
    let(:query_string) do
      %|
        query($query : String!, $projectId: ID!) {
          membersSuggestion(projectId: $projectId, query: $query){
            username
            email
          }
        }
      |
    end
    let(:variables) { { 'query' => 'hat', 'projectId' => projects(:project_four).id } }
    let(:expected_users) { { 'username' => 'nhat', 'email' => 'nhat@gmail.com' } }
    let(:unexpected_users) { { 'username' => 'phat', 'email' => 'phat@gmail.com' } }
    it 'return the users with string \"hat\" in the specific project' do
      expect(result['data']['membersSuggestion']).to include(expected_users)
    end
    it 'does not return the users with string \"hat\" who is not in the specific project' do
      expect(result['data']['membersSuggestion']).not_to include(unexpected_users)
    end
  end

  describe 'projectMembers' do
    let(:query_string) do
      %|
        query($projectId: ID!){
          projectMembers(projectId: $projectId){
            companyMember{
              user{
                username
              }
            }
            status
            role
          }
        }
      |
    end
    let(:variables) { { 'projectId' => projects(:project_one).id } }
    let!(:return_result) { result['data']['projectMembers'] }
    it 'get all the project\'s members' do
      expect(return_result.count).to eq(projects(:project_one).member_relationships.count)
    end
    it 'return the array with activated admin at the first order' do
      first_admin = {
        'companyMember' => {
          'user' => { 'username' => users(:loc).username }
        },
        'status' => ProjectMember::PROJECT_STATUS_ACTIVE,
        'role' => ProjectMember::ROLE_PROJECT_ADMIN
      }
      expect(return_result.first).to eq(first_admin)
    end
    it 'return the array with the last user is restricted' do
      expect(return_result.last['status']).to eq(ProjectMember::PROJECT_STATUS_RESTRICTED)
    end
  end

  describe 'projectRules' do
    let(:query_string) do
      %|
        query($projectId: ID!){
          projectRules(projectId: $projectId){
            ruleString
            isApplied
          }
        }
      |
    end
    let(:variables) { { 'projectId' => projects(:project_one).id } }
    let!(:return_result) { result['data']['projectRules'] }
    it 'return all the rules in project' do
      expect(return_result.count).to eq(projects(:project_one).rules.count)
    end
    it 'return the applied rule at the first order' do
      expect(return_result.first['isApplied']).to be(true)
    end
  end

  describe 'currentAppliedRuleOfProject' do
    let(:query_string) do
      %|
        query($projectId: ID!){
          currentAppliedRuleOfProject(projectId: $projectId){
            isApplied
          }
        }
      |
    end
    let(:variables) { { 'projectId' => projects(:project_one).id } }
    it 'return the current applied rule in project' do
      expect(result['data']['currentAppliedRuleOfProject']['isApplied']).to be true
    end
  end

  describe 'memberAssignmentsDetails' do
    let(:query_string) do
      %|
        query($projectId: ID!){
          memberAssignmentsDetails(projectId: $projectId){
            id
          }
        }
      |
    end
    let(:variables) { { 'projectId' => projects(:project_one).id } }
    let(:expected_ids) do
      project_members(:member_project_one_1).authorizations.ids
    end
    let(:return_result) do
      return_result = []
      result['data']['memberAssignmentsDetails'].each { |a| return_result << a['id'].to_i }
      return_result
    end
    it 'return array of authorization' do
      expect(return_result).to eq(expected_ids)
    end
  end

  describe 'company' do
    let(:query_string) do
      %|query($companyId: ID!){
        company(companyId: $companyId){
          name
        }
      }|
    end
    let(:variables) { { 'companyId' => companies(:company_one).id.to_s } }
    it 'return a company object' do
      expect(result.dig('data', 'company', 'name')).to eq(companies(:company_one).name)
    end
  end

  describe 'plans' do
    let(:query_string) do
      %(query getAllPlansOfApplication{
        allPlans{
          name
        }
      })
    end

    let(:return_result) do
      result.dig('data', 'allPlans').map do |plan|
        plan['name']
      end
    end
    it 'return an array of all plans name in descendent order' do
      expect(return_result).to eq(Plan.all.order(created_at: :desc).pluck(:name))
    end
  end

  describe 'companies' do
    let(:query_string) do
      %(query getAllCompaniesOfApplication{
        allCompanies{
          name
        }
      })
    end

    let(:return_result) do
      result.dig('data', 'allCompanies').map do |company|
        company['name']
      end
    end
    it 'return an array of all companies name in descendent order' do
      expect(return_result).to eq(Company.all.order(created_at: :desc).pluck(:name))
    end
  end
  describe 'get_all_services' do
    let(:query_string) do
      %(query{
        services{
          name
        }
      }
      )
    end
    let(:expected_result) do
      expected_result = []
      result['data']['services'].each { |s| expected_result << s['name'] }
      expected_result
    end
    it 'return all the services of the application' do
      expect(
        expected_result
      ).to match_array(Service.all.order(created_at: :desc).pluck(:name))
    end
  end
end
