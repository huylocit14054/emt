class Rule < ApplicationRecord
  belongs_to :project
  has_many :rule_fields, dependent: :destroy
end
