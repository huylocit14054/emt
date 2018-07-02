class Utm < ApplicationRecord
  belongs_to :project_member

  REGEX_GET_DIMENSION_CODE = /(<<\d*?>>)/ # get <<1>>|<<2>>|<<3>>
  # REGEX_CHECK_VALID_URL = %r/^((https?):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
  # base on the values the user return generate new link base on the apllied rule
  # example hash value:
  # values: {
  #   "rule_id": 1,
  #   "project_member_id": 3,
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
  # url?x=<<1>>-<2>&b=<<4>>&date=<<date>>

  # generate all utms with received values
  def self.generate_utms(values:)
    id = values['rule_id']
    project_member_id = values['project_member_id']
    # get the rule
    rule = Rule.find(id).rule_string
    url_strings = []
    # get attributes array and base on each attribute generate a utm recode
    attributes = values['attributes']
    attributes.each do |attribute|
      url = generate_utm_record(values: attribute, rule: rule, project_member_id: project_member_id)
      url_strings << url
    end
    url_strings
  end

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
    utm.url
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

  # standardize url landing pageattributes
  def self.standardize_landing_page(url:, rule:)
    url.include?('?') ? url + '&' + rule : url + '?' + rule
  end
end
