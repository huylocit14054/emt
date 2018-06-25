class RuleField < ApplicationRecord
  belongs_to :rule
  belongs_to :dimension
end
