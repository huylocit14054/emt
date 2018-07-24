require 'rails_helper'

RSpec.describe Project, type: :model do
  fixtures :all

  let(:member_loc) { project_members(:member_project_one_1) }
  let(:member_nhat) { project_members(:member_project_one_2) }
  let(:member_phat) { project_members(:member_project_one_3) }
  let(:member_thuy) { project_members(:member_project_one_4) }
  let(:dimension_1) { dimensions(:utm_source_one) }
  let(:dimension_2) { dimensions(:utm_source_two) }
  let(:dimension_3) { dimensions(:utm_source_three) }
  let(:option_6) { options(:option_6) }
  let(:option_7) { options(:option_7) }
  let(:project) { projects(:project_one) }

  describe '#generate_dimensions_assigment_table' do
    let(:options_l1) do
      record = Jbuilder.encode do |json|
        options = authorizations(:auth_p1_d1_loc).option_authorizations
        json.array! options
      end
      JSON.parse(record)
    end
    let(:options_l2) do
      record = Jbuilder.encode do |json|
        options = authorizations(:auth_p1_d2_loc).option_authorizations
        json.array! options
      end
      JSON.parse(record)
    end
    let(:options_n2) do
      record = Jbuilder.encode do |json|
        options = authorizations(:auth_p1_d2_nhat).option_authorizations
        json.array! options
      end
      JSON.parse(record)
    end
    let(:options_p1) do
      record = Jbuilder.encode do |json|
        options = authorizations(:auth_p1_d1_phat).option_authorizations
        json.array! options
      end
      JSON.parse(record)
    end
    let(:options_p2) do
      record = Jbuilder.encode do |json|
        options = authorizations(:auth_p1_d2_phat).option_authorizations
        json.array! options
      end
      JSON.parse(record)
    end
    let(:result) do
      [
        {
          'member_id' => member_loc.id,
          'member_name' => member_loc.company_member.user.username,
          'utm source one' => {
            'id' => dimension_1.id,
            'category' => Dimension::CATEGORY_SELECTION,
            'options' => options_l1
          },
          'utm source two' => {
            'id' => dimension_2.id,
            'category' => Dimension::CATEGORY_SELECTION,
            'options' => options_l2
          },
          'utm source three' => {
            'id' => dimension_3.id,
            'category' => Dimension::CATEGORY_INPUT,
            'assigned' => true
          }
        },
        {
          'member_id' => member_nhat.id,
          'member_name' => member_nhat.company_member.user.username,
          'utm source one' => {
            'id' => dimension_1.id,
            'category' => Dimension::CATEGORY_SELECTION,
            'options' => []
          },
          'utm source two' => {
            'id' => dimension_2.id,
            'category' => Dimension::CATEGORY_SELECTION,
            'options' => options_n2
          },
          'utm source three' => {
            'id' => dimension_3.id,
            'category' => Dimension::CATEGORY_INPUT,
            'assigned' => true
          }
        },
        {
          'member_id' => member_phat.id,
          'member_name' => member_phat.company_member.user.username,
          'utm source one' => {
            'id' => dimension_1.id,
            'category' => Dimension::CATEGORY_SELECTION,
            'options' => options_p1
          },
          'utm source two' => {
            'id' => dimension_2.id,
            'category' => Dimension::CATEGORY_SELECTION,
            'options' => options_p2
          },
          'utm source three' => {
            'id' => dimension_3.id,
            'category' => Dimension::CATEGORY_INPUT,
            'assigned' => false
          }
        },
        {
          'member_id' => member_thuy.id,
          'member_name' => member_thuy.company_member.user.username,
          'utm source one' => {
            'id' => dimension_1.id,
            'category' => Dimension::CATEGORY_SELECTION,
            'options' => []
          },
          'utm source two' => {
            'id' => dimension_2.id,
            'category' => Dimension::CATEGORY_SELECTION,
            'options' => []
          },
          'utm source three' => {
            'id' => dimension_3.id,
            'category' => Dimension::CATEGORY_INPUT,
            'assigned' => false
          }
        }
      ]
    end

    it 'return project members with their authorization' do
      expect(Project.generate_dimensions_assigment_table(project_id: project.id)).to eq(result)
    end
  end

  describe '#generate_dimensions_selection_tree' do
    let(:children_d1) do
      children = []
      dimension_1.options.each do |option|
        name = dimension_1.name + ': ' + option.name
        key = dimension_1.id.to_s + '-' + option.id.to_s
        child = { 'label' => name, 'value' => key, 'key' => key }
        children << child
      end
      children
    end
    let(:children_d2) do
      children = []
      dimension_2.options.each do |option|
        name = dimension_2.name + ': ' + option.name
        key = dimension_2.id.to_s + '-' + option.id.to_s
        child = { 'label' => name, 'value' => key, 'key' => key }
        children << child
      end
      children
    end
    let(:result) do
      [
        {
          'label' => 'utm source one',
          'value' => dimension_1.id.to_s,
          'key' => dimension_1.id.to_s,
          'children' => children_d1
        },
        {
          'label' => 'utm source two',
          'value' => dimension_2.id.to_s,
          'key' => dimension_2.id.to_s,
          'children' => children_d2
        },
        {
          'label' => 'utm source three',
          'value' => dimension_3.id.to_s,
          'key' => dimension_3.id.to_s
        }
      ]
    end
    it 'generate dimension selection tree' do
      selection_tree = Project.generate_dimensions_selection_tree(project_id: project.id)
      expect(selection_tree).to eq(result)
    end
  end

  describe '#split_array' do
    let(:input_array) do
      [dimension_1.id.to_s, # all option in demension 1 will be authorization
       "#{dimension_2.id}-#{option_6.id}", # only option_6 in dimension 2
       "#{dimension_2.id}-#{option_7.id}", # only option_7 in dimension 2
       dimension_3.id.to_s] # input dimension 3 only create authorization but not option_authorization
    end
    let(:return_array) do
      [[dimension_1.id.to_s], # all option in demension 1 will be authorization
       [dimension_2.id.to_s, option_6.id.to_s], # only option_6 in dimension 2
       [dimension_2.id.to_s, option_7.id.to_s], # only option_7 in dimension 2
       [dimension_3.id.to_s]] # input dimension 3 only create authorization but not option_authorization
    end
    it 'split to array of string to the correct format' do
      array = Project.split_array(choices: input_array)
      expect(array).to eq(return_array)
    end
  end

  describe '#authorize_all_option' do
    let(:auth_d1_loc) { authorizations(:auth_p1_d1_loc) }
    it 'create authorization for all option' do
      Project.authorize_all_option(dimension_id: dimension_1.id, auth: auth_d1_loc)
      options = OptionAuthorization.where(authorization: auth_d1_loc)
      expect(options.count).to eq(5)
      OptionAuthorization.delete_all
    end
  end

  describe '#create_authorization_and_option' do
    let(:thuy) { company_members(:c1_member_thuy) }
    let(:choices) do
      [
        [dimension_1.id.to_s], # all option in demension 1 will be authorization
        [dimension_2.id.to_s, option_6.id.to_s], # only option_6 in dimension 2
        [dimension_2.id.to_s, option_7.id.to_s], # only option_7 in dimension 2
        [dimension_3.id.to_s] # input dimension 3 only create authorization but not option_authorization
      ]
    end
    it 'call authorize_all_option when all option of the selection dimension have been authorize' do
      expect(described_class).to receive(:authorize_all_option).once
      Project.create_authorization_and_option(
        company_member_id: thuy.id,
        project_id: project.id,
        choices_array: choices
      )
    end

    it 'create authorization value for all choice dimensions' do
      auths = member_thuy.authorizations
      expect(auths.count).to eq(0)
      Project.create_authorization_and_option(
        company_member_id: thuy.id,
        project_id: project.id,
        choices_array: choices
      )
      expect(auths.count).to eq(3)
    end

    it 'create all option_authorization for selection dimension with all choices' do
      Project.create_authorization_and_option(
        company_member_id: thuy.id,
        project_id: project.id,
        choices_array: choices
      )
      auths = member_thuy.authorizations.find_by(dimension_id: dimension_1.id)
      expect(auths.option_authorizations.count).to eq(5)
    end

    it 'create only choice options for dimension' do
      Project.create_authorization_and_option(
        company_member_id: thuy.id,
        project_id: project.id,
        choices_array: choices
      )
      auths = member_thuy.authorizations.find_by(dimension_id: dimension_2.id)
      expect(auths.option_authorizations.count).to eq(2)
    end

    it 'create only choice input dimension with no option authorization' do
      Project.create_authorization_and_option(
        company_member_id: thuy.id,
        project_id: project.id,
        choices_array: choices
      )
      auths = member_thuy.authorizations.find_by(dimension_id: dimension_3.id)
      expect(auths.option_authorizations.count).to be_zero
    end
  end

  describe '#assign_dimension_for_members' do
    let(:members) { [company_members(:c1_member_loc).id.to_s, company_members(:c1_member_nhat).id.to_s] }
    let(:choices) do
      [dimension_1.id.to_s, # all option in demension 1 will be authorization
       "#{dimension_2.id}-#{option_6.id}", # only option_6 in dimension 2
       "#{dimension_2.id}-#{option_7.id}", # only option_7 in dimension 2
       dimension_3.id.to_s] # input dimension 3 only create authorization but not option_authorization
    end
    let(:return_array) do
      [[dimension_1.id.to_s], # all option in demension 1 will be authorization
       [dimension_2.id.to_s, option_6.id.to_s], # only option_6 in dimension 2
       [dimension_2.id.to_s, option_7.id.to_s], # only option_7 in dimension 2
       [dimension_3.id.to_s]] # input dimension 3 only create authorization but not option_authorization
    end
    it 'calls create_authorization_and_option' do
      expect(described_class).to receive(:split_array).once
      expect(described_class).to receive(:create_authorization_and_option).twice
      Project.assign_dimension_for_members(company_members: members, project_id: project, choices: choices)
    end
  end

  describe '#update_member_assignments' do
    let(:option_6) { options(:option_6) }
    let(:option_7) { options(:option_7) }
    let(:choices) { [dimension_1.id.to_s] }
    it 'remove all assigned authorization' do
      Project.update_member_assignments(member_id: member_nhat.id, new_assignments: choices)
      expect(
        member_nhat.authorizations.find_by(dimension_id: dimension_2.id)
      ).to be_nil
      expect(
        member_nhat.authorizations.find_by(dimension_id: dimension_3.id)
      ).to be_nil
    end

    it 'call assign_dimension_for_members' do
      expect(described_class).to receive(:assign_dimension_for_members).once
      Project.update_member_assignments(member_id: member_nhat.id, new_assignments: choices)
    end
    it 'delete all old authorization and create new authorization' do
      expect(member_nhat.authorizations.count).to eq(2)
      Project.update_member_assignments(member_id: member_nhat.id, new_assignments: choices)
      expect(member_nhat.authorizations.count).to eq(1)
    end

    it 'assign new dimension for the user' do
      Project.update_member_assignments(member_id: member_nhat.id, new_assignments: choices)
      expect(
        member_nhat.authorizations.find_by(dimension_id: dimension_1.id)
      ).not_to be_nil
    end

    it 'create new option_authrization for option' do
      Project.update_member_assignments(member_id: member_nhat.id, new_assignments: choices)
      expect(
        member_nhat.authorizations.find_by(dimension_id: dimension_1.id).option_authorizations.count
      ).to eq(dimension_1.options.count)
    end
  end
end
