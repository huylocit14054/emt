class Utm < ApplicationRecord
  belongs_to :project_member

  REGEX_GET_DIMENSION_IDS = /<<(\d*?)>>/ # get 1|2|3
  REGEX_GET_DIMENSION_CODE = /(<<\d*?>>)/ # get <<1>>|<<2>>|<<3>>
  REGEX_GET_DATE_CODE = /(<<date>>)/ # get code <<date>>
  # REGEX_CHECK_VALID_URL = %r/^((https?):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
  # base on the values the user return generate new link base on the apllied rule
  # example hash value:
  # values: {
  #   "id": 1,
  #   "url": "https://google.com.vn",
  #   "attributes":{
  #    "1": "FB",
  #    "2": "Google",
  #    "3": "This is my link",
  #    "4": ""
  #   }
  # }
  def self.generate_url(values:)
    utm = Utm.new
    # get the rule
    id = values['id']
    url = values['url']
    # delete the last character '/' if it exist
    url[url.rindex('/')] = '' if url.end_with?('/')
    attributes = value['attributes']
    rule = Rule.find(id).rule_string
    attributes.each do |key, value|
      key = '<<' + key + '>>'
      rule = rule.gsub(key, value)
    end
  end
end
