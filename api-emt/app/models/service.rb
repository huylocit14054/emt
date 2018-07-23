class Service < ApplicationRecord
  has_many :plan_services, inverse_of: :service
  has_many :plans, through: :plan_services
end
