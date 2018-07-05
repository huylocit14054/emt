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
          'member_name' => member_loc.user.username,
          'utm source one' => {
            'id' => dimension_1.id,
            'category' => 'selection',
            'options' => options_l1
          },
          'utm source two' => {
            'id' => dimension_2.id,
            'category' => 'selection',
            'options' => options_l2
          },
          'utm source three' => {
            'id' => dimension_3.id,
            'category' => 'input',
            'assigned' => true
          }
        },
        {
          'member_id' => member_nhat.id,
          'member_name' => member_nhat.user.username,
          'utm source one' => {
            'id' => dimension_1.id,
            'category' => 'selection',
            'options' => []
          },
          'utm source two' => {
            'id' => dimension_2.id,
            'category' => 'selection',
            'options' => options_n2
          },
          'utm source three' => {
            'id' => dimension_3.id,
            'category' => 'input',
            'assigned' => true
          }
        },
        {
          'member_id' => member_phat.id,
          'member_name' => member_phat.user.username,
          'utm source one' => {
            'id' => dimension_1.id,
            'category' => 'selection',
            'options' => options_p1
          },
          'utm source two' => {
            'id' => dimension_2.id,
            'category' => 'selection',
            'options' => options_p2
          },
          'utm source three' => {
            'id' => dimension_3.id,
            'category' => 'input',
            'assigned' => false
          }
        },
        {
          'member_id' => member_thuy.id,
          'member_name' => member_thuy.user.username,
          'utm source one' => {
            'id' => dimension_1.id,
            'category' => 'selection',
            'options' => []
          },
          'utm source two' => {
            'id' => dimension_2.id,
            'category' => 'selection',
            'options' => []
          },
          'utm source three' => {
            'id' => dimension_3.id,
            'category' => 'input',
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
    let(:input_array) { ['1', '2-1', '2-2'] }
    let(:return_array) { [['1'], ['2', '1'], ['2', '2']] }
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
    let(:thuy) { users(:thuy) }
    let(:option_6) { options(:option_6) }
    let(:option_7) { options(:option_7) }
    let(:choices) do
      [
        [dimension_1.id.to_s],
        [dimension_2.id.to_s, option_6.id.to_s],
        [dimension_2.id.to_s, option_7.id.to_s],
        [dimension_3.id.to_s]
      ]
    end
    it 'create authorization and option for all the choice' do
      expect(described_class).to receive(:authorize_all_option).once
      Project.create_authorization_and_option(user_id: thuy.id, project_id: project.id, choices_array: choices)
      # auth_thuy_d2 = member_thuy.authorizations.find_by(dimension_id: dimension_2.id)
      # allow(auth_thuy_d2.option_authorizations).to receive(:create!).twice
      expect(member_thuy.authorizations.count).to eq(3)
      # expect(auth_thuy_d2).to have_receive(:create!).once
    end
  end
end
