class Rule < ApplicationRecord
  extend OrderAsSpecified
  belongs_to :project

  before_create :deactivate_current_rule
  validate :check_rule_string_url, :check_dimension_in_rule
  validates :rule_string, uniqueness: true
  REGEX_GET_DIMENSION_IDS = /<<(\d*?)>>/ # get 1|2|3
  REGEX_GET_DIMENSION_CODE = /(<<\d*?>>)/ # get <<1>>|<<2>>|<<3>>
  REGEX_CHECK_VALIDATE_URL = /([-a-zA-Z0-9@:%_\+.~#?&=]+)/ # valid "url?utm_source=--&utm_camp="
  REGEX_GET_DATE_CODE = /(<<date>>)/ # get code <<date>>

  # activate_rule
  def activate_rule
    deactivate_current_rule
    update(is_applied: true)
  end

  def display_name
    rule = rule_string
    # get all dimension id in rule
    dimension_ids = rule.scan(REGEX_GET_DIMENSION_IDS).flatten.map(&:to_i).uniq
    dimension_ids.each do |dimension_id|
      dimension_name = Dimension.find(dimension_id).name
      rule = rule.gsub(dimension_id.to_s, dimension_name)
    end
    rule
  end

  private

  # rubocop:disable Metrics/LineLength
  # check rule validation
  def check_rule_string_url
    rule = rule_string
    rule_without_code = rule.gsub(REGEX_GET_DIMENSION_CODE, '')
    rule_without_code = rule_without_code.gsub(REGEX_GET_DATE_CODE, '')
    # get all the valid url syntax and check the size with the rule_without_code original size
    !rule_without_code[REGEX_CHECK_VALIDATE_URL].nil? && rule_without_code[REGEX_CHECK_VALIDATE_URL].size == rule_without_code.size ? true : errors.add(:rule_string, 'Invalid URL format')
  end
  # rubocop:enable Metrics/LineLength

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
