class Plan < ApplicationRecord
  # rubocop:disable Rails/HasManyOrHasOneDependent
  has_many :plan_services, inverse_of: :plan
  has_many :services, through: :plan_services
  has_many :companies, inverse_of: :plan
  # rubocop:enable Rails/HasManyOrHasOneDependent
end
