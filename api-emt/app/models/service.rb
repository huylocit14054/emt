class Service < ApplicationRecord
  # rubocop:disable Rails/HasManyOrHasOneDependent
  has_many :plan_services, inverse_of: :service
  has_many :plans, through: :plan_services
  # rubocop:enable Rails/HasManyOrHasOneDependent
  UTM_SERVICE = 'utm'
  OMS_SERVICE = 'oms'
end
