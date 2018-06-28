class Utm < ApplicationRecord
  belongs_to :project_member

  REGEX_GET_DIMENSION_CODE = /(<<\d*?>>)/ # get <<1>>|<<2>>|<<3>>
 # REGEX_CHECK_VALID_URL = %r/^((https?):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
  # base on the values the user return generate new link base on the apllied rule
  # example hash value:
  # values: {
  #   "rule_id": 1,
  #   "project_member_id": 3,
  #   "url": "https://google.com.vn",
  #   "attributes":{
  #    "1": "FB",
  #    "2": "Google",
  #    "3": "This is my link",
  #    "4": "",
  #     "date": "23/1/2017"
  #   }
  # }
  # url?x=<<1>>-<2>&b=<<4>>&date=<<date>>
  def self.generate_url(values:)
    # get the rule
    id = values['rule_id']
    project_member_id = values['project_member_id']
    url = values['url']
    # delete the last character '/' if it exist
    url[url.rindex('/')] = '' if url.end_with?('/')
    attributes = values['attributes']
    rule = Rule.find(id).rule_string
    # subtitue values to rule
    rule = subtitute_values_to_rule(attributes: attributes, rule: rule)
    # add url link to the string
    generated_url = url + '?' + rule
    # remove unused dimension
    generated_url = remove_unused_dimension(rule: generated_url)
    Utm.create(url: generated_url, project_member_id: project_member_id)
  end

  # subtitute the value to the code dimension
  def self.subtitute_values_to_rule(attributes:, rule:)
    attributes.each do |key, value|
      key = '<<' + key + '>>'
      rule = rule.gsub(key, value)
    end
    rule
  end

  # remove un-used dimension code
  def self.remove_unused_dimension(rule:)
    rule.gsub(REGEX_GET_DIMENSION_CODE, '')
  end
end
