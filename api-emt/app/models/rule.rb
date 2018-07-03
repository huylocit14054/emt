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

  REGEX_GET_INVALID_DIMENSION_STRING = /(<<.*?>>)/ # get <<HEHE>>

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

  # rubocop:disable Metrics/LineLength Metrics/CyclomaticComplexity Metrics/PerceivedComplexity
  # check rule validation
  def check_rule_string_url
    rule = rule_string || ''
    if rule.blank?
      errors.add(:rule_string, 'cannot be blank')
    else
      rule_without_code = rule.gsub(REGEX_GET_DIMENSION_CODE, '')
      rule_without_code = rule_without_code.gsub(REGEX_GET_DATE_CODE, '')
      # get all the valid url syntax and check the size with the rule_without_code original size
      if !rule_without_code[REGEX_CHECK_VALIDATE_URL].nil? && rule_without_code[REGEX_CHECK_VALIDATE_URL].size == rule_without_code.size
        true
      else
        get_invalid_url_charactor(rule_without_code: rule_without_code)
      end
    end
  end
  # rubocop:enable Metrics/LineLength Metrics/CyclomaticComplexity Metrics/PerceivedComplexity

  # check dimension validation in rule
  def check_dimension_in_rule
    rule = rule_string || ''
    # get all dimension id in rule
    dimension_ids = rule.scan(REGEX_GET_DIMENSION_IDS).flatten.map(&:to_i)
    # get all dimension id of the project
    project_dimension_ids = Project.find(project_id).dimensions.ids
    # dimension_ids - project_dimension_ids = [] => dimension_ids all include in the project => validate
    if (dimension_ids - project_dimension_ids).empty?
      true
    else
      invalid_dimension = (dimension_ids - project_dimension_ids).join(', ')
      errors.add(:rule_string, "does not include dimensions with id: #{invalid_dimension}")
    end
  end

  # activate new created rule and deactivate current active rule
  def deactivate_current_rule
    current_rule = Rule.find_by(project_id: project_id, is_applied: true)
    current_rule&.update(is_applied: false)
  end

  # rubocop:disable Metrics/LineLength
  def get_invalid_url_charactor(rule_without_code:)
    # get all invalid dimension string
    invalid_dimension = rule_without_code.scan(REGEX_GET_INVALID_DIMENSION_STRING).flatten
    if invalid_dimension
      error_string = invalid_dimension.count == 1 ? "cannot get dimension #{invalid_dimension.join('')}" : "cannot get dimensions #{invalid_dimension.join(', ')}"
      errors.add(:rule_string, error_string)
    end
    rule_without_code = rule_without_code.gsub(REGEX_GET_INVALID_DIMENSION_STRING, '')
    # get all valid url and split it to array
    rule_valid = !rule_without_code[REGEX_CHECK_VALIDATE_URL].nil? ? rule_without_code[REGEX_CHECK_VALIDATE_URL].split('') : []
    # split the rule to array
    rule_without_code = rule_without_code.split('')
    # rule - valid_rule = invalid rule
    invalid_url = (rule_without_code - rule_valid).uniq.join(', ')
    errors.add(:rule_string, "cannot contain #{invalid_url}") if invalid_url.present?
  end
  # rubocop:enable Metrics/LineLength
end
