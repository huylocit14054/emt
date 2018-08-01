class Plan < ApplicationRecord
  # rubocop:disable Rails/HasManyOrHasOneDependent
  has_many :plan_services, inverse_of: :plan, dependent: :destroy
  has_many :services, through: :plan_services
  has_many :companies, inverse_of: :plan
  # rubocop:enable Rails/HasManyOrHasOneDependent

  validates :name, uniqueness: { case_sensitive: false }
end
