class Rule < ApplicationRecord
  belongs_to :project

  validate :valid
  
  REGEX_GET_DIMENSION_NAME = /<<(.*?)>>/

  private

  # check rule validate 
  def valid
    rule = rule_string
    dimension_names = rule.scan(REGEX_GET_DIMENSION_NAME).flatten
    puts dimension_names
  end
end
