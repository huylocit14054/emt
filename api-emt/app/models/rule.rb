class Rule < ApplicationRecord
  extend OrderAsSpecified
  belongs_to :project

  before_create :deactivate_current_rule
  validate :check_rule_string_url, :check_dimension_in_rule

  REGEX_GET_DIMENSION_IDS = /<<(\d*?)>>/ # get 1|2|3
  REGEX_GET_DIMENSION_CODE = /(<<\d*?>>)/ # get <<1>>|<<2>>|<<3>>
  REGEX_CHECK_VALIDATE_URL = /([-a-zA-Z0-9@:%_\+.~#?&=]+)/ # valid "url?utm_source=--&utm_camp="

  # activate_rule
  def activate_rule
    deactivate_current_rule
    update(is_applied: true)
  end

  private

  # check rule validation
  def check_rule_string_url
    rule = rule_string
    rule_without_code = rule.gsub(REGEX_GET_DIMENSION_CODE, '')
    # get all the valid url syntax and check the size with the rule_without_code original size
    rule_without_code[REGEX_CHECK_VALIDATE_URL].size == rule_without_code.size ? true : errors.add(:rule_string, 'Invalid URL format')
  end

  # check dimension validation in rule
  def check_dimension_in_rule
    rule = rule_string
    # get all dimension id in rule
    dimension_ids = rule.scan(REGEX_GET_DIMENSION_IDS).flatten.map(&:to_i)
    # get all dimension id of the project
    project_dimension_ids = Project.find(project_id).dimensions.ids
    # dimension_ids - project_dimension_ids = [] => dimension_ids all include in the project => validate
    if (dimension_ids - project_dimension_ids).empty?
      true
    else
      errors.add(:rule_string, 'Dimension does not in the project')
    end
  end

  # activate new created rule and deactivate current active rule
  def deactivate_current_rule
    current_rule = Rule.find_by(project_id: project_id, is_applied: true)
    current_rule&.update(is_applied: false)
  end
end
