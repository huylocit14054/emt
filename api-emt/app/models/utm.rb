class Utm < ApplicationRecord
  belongs_to :project_member

  REGEX_GET_DIMENSION_CODE = /({{\d*?}})/ # get {{1}}|{{2}}|{{3}}
  # REGEX_CHECK_VALID_URL = %r/^((https?):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
  # base on the values the user return generate new link base on the apllied rule
  # example hash value:
  # values: {
  #   "rule_id": 1,
  #   "project_id": 3,
  #   "attributes":[
  #   {
  #    "url": "https://google.com.vn",
  #    "1": "FB",
  #    "2": "Google",
  #    "3": "This is my link",
  #    "4": "",
  #     "date": "230118"
  #    },
  #   ]
  # }
  # url?x={{1}}-<2>&b={{4}}&date={{date}}

  # generate a utm record(return generated url)
  def self.generate_utm_record(values:, rule:, project_member_id:)
    url = values['url']
    # delete the last character '/' if it exist
    url[url.rindex('/')] = '' if url.end_with?('/')
    # delete url values
    values.delete('url')
    attributes = values
    # subtitue values to rule
    rule = subtitute_values_to_rule(attributes: attributes, rule: rule)
    # add url link to the string
    generated_url = standardize_landing_page(url: url, rule: rule)
    # remove unused dimension
    generated_url = remove_unused_dimension(rule: generated_url)
    utm = Utm.create(url: generated_url, project_member_id: project_member_id)
    utm
  end

  # substitute the value to the code dimension
  def self.subtitute_values_to_rule(attributes:, rule:)
    attributes.each do |key, value|
      key = '{{' + key + '}}'
      rule = rule.gsub(key, value)
    end
    rule
  end

  # remove un-used dimension code
  def self.remove_unused_dimension(rule:)
    rule.gsub(REGEX_GET_DIMENSION_CODE, '')
  end

  # standardize url landing page attributes
  def self.standardize_landing_page(url:, rule:)
    url.include?('?') ? url + '&' + rule : url + '?' + rule
  end

  # generate all utms with received values
  def self.generate_utms(values:, company_member_id:)
    id = values['rule_id']
    # get the rule string
    rule = Rule.find(id).rule_string
    project_id = values['project_id']
    project_member_id = ProjectMember.find_by(project_id: project_id, company_member_id: company_member_id).id
    url_strings = []
    # get attributes array and base on each attribute generate a utm recode
    attributes = values['attributes']
    attributes.each do |attribute|
      utm = generate_utm_record(values: attribute, rule: rule, project_member_id: project_member_id)
      url_strings << utm
    end
    url_strings
  end
end
