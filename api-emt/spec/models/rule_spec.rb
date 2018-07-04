require 'rails_helper'

RSpec.describe Rule, type: :model do
  fixtures :all
  let(:ids) { @project.dimensions.ids }
  let(:new_first_rule) do
    Rule.new(
      rule_string: "utm_source=<<#{ids.first}>>-<<#{ids.first}>>&utm_camp=<<#{ids.second}>>&date=<<date>>",
      project: @project
    )
  end
  let(:new_second_rule) do
    Rule.new(
      rule_string: "utm_source=<<#{ids.second}>>-<<#{ids.first}>>&utm_camp=<<#{ids.last}>>&date=<<date>>",
      project: @project
    )
  end

  before(:example) do
    @project = projects(:project_one)
  end
  describe '#check_rule_string_url' do
    it 'return true when the rule string has valid url format' do
      new_rule = Rule.new(rule_string: 'utm_source=<<3>>-<<1>>&utm_camp=<<2>>&date=<<date>>', project: @project)
      expect(new_rule.send(:check_rule_string_url)).to be(true)
    end

    it 'return error when the rule is blank' do
      new_rule = Rule.new(rule_string: '', project: @project)
      new_rule.send(:check_rule_string_url)
      expect(new_rule.errors[:rule_string]).to include('cannot be blank')
    end

    it 'return error when the rule is nil' do
      new_rule = Rule.new(rule_string: nil, project: @project)
      new_rule.send(:check_rule_string_url)
      expect(new_rule.errors[:rule_string]).to include('cannot be blank')
    end

    it 'return error when rule include an invalid dimension name' do
      new_rule = Rule.new(
        rule_string: 'utm_source=<<3>>-<<1>>&utm_camp=<<2>>-<<invalid_dimension_1>>',
        project: @project
      )
      new_rule.send(:check_rule_string_url)
      error_string = 'cannot get dimension <<invalid_dimension_1>>'
      expect(new_rule.errors[:rule_string]).to include(error_string)
    end

    it 'return error when rule include invalid dimensions name' do
      new_rule = Rule.new(
        rule_string: 'utm_camp=<<2>>-<<invalid_dimension_1>>_<<invalid_dimension_2>>',
        project: @project
      )
      new_rule.send(:check_rule_string_url)
      error_string = 'cannot get dimensions <<invalid_dimension_1>>, <<invalid_dimension_2>>'
      expect(new_rule.errors[:rule_string]).to include(error_string)
    end

    it 'return error when rule include invalid url format' do
      new_rule = Rule.new(rule_string: '{}<>{}<>', project: @project)
      new_rule.send(:check_rule_string_url)
      error_string = 'cannot contain {, }, <, >'
      expect(new_rule.errors[:rule_string]).to include(error_string)
    end

    it 'return error when rule include invalid url format' do
      new_rule = Rule.new(rule_string: 'utm_camp=<<2>>&xtm={}<>{}<>', project: @project)
      new_rule.send(:check_rule_string_url)
      error_string = 'cannot contain {, }, <, >'
      expect(new_rule.errors[:rule_string]).to include(error_string)
    end

    it 'return error when user only input dimension id' do
      new_rule = Rule.new(rule_string: '<<2>>', project: @project)
      new_rule.send(:check_rule_string_url)
      error_string = 'cannot get dimensions '
      expect(new_rule.errors[:rule_string]).to include(error_string)
    end

    it 'return true when user rule is valid url without dimension id' do
      new_rule = Rule.new(rule_string: 'hehe=?', project: @project)
      expect(new_rule.send(:check_rule_string_url)).to be(true)
    end
  end

  describe '#check_dimension_in_rule' do
    it 'return dimension that dose not in the project' do
      ids = @project.dimensions.ids
      new_rule = Rule.new(rule_string: "utm_camp=<<#{ids.first}>>_<<1>>", project: @project)
      new_rule.send(:check_dimension_in_rule)
      error_string = 'does not include dimensions with id: 1'
      expect(new_rule.errors[:rule_string]).to include(error_string)
    end
  end

  describe '#deactivate_current_rule' do
    it 'activate new create rule when creating new rule' do
      new_first_rule.save
      expect(new_first_rule.reload.is_applied).to be(true)
      new_first_rule.destroy
    end

    it 'deactivate old applied rule when create new rule' do
      new_first_rule.save
      expect(new_first_rule.is_applied).to be(true)
      new_second_rule.save
      expect(new_first_rule.reload.is_applied).to be(false)
      expect(new_second_rule.reload.is_applied).to be(true)
      new_first_rule.destroy
      new_second_rule.destroy
    end
  end

  describe '.activate_rule' do
    before(:example) do
      new_first_rule.save
      new_second_rule.save
    end
    after(:example)  do
      new_first_rule.destroy
      new_second_rule.destroy
    end
    it 'activate the applied rule' do
      expect(new_second_rule.reload.is_applied).to be(true)
      new_first_rule.reload.activate_rule
      expect(new_first_rule.reload.is_applied).to be(true)
      expect(new_second_rule.reload.is_applied).to be(false)
    end
  end

  describe '.display_name' do
    it 'return display name for the rule in the database' do
      rule = new_first_rule.display_name
      display_name = 'utm_source=<<utm source one>>-<<utm source one>>&utm_camp=<<utm source two>>&date=<<date>>'
      expect(rule).to eq(display_name)
    end
  end
end
