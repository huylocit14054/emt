class Plan < ApplicationRecord
  has_many :plan_services, inverse_of: :plan
  has_many :services, through: :plan_services
  has_many :companies, inverse_of: :plan
end
