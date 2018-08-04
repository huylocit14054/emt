class Service < ApplicationRecord
  has_many :plan_services, inverse_of: :service, dependent: :destroy
  has_many :plans, through: :plan_services

  UTM_SERVICE = 'utm'
  OMS_SERVICE = 'oms'

  validates :name, uniqueness: { case_sensitive: false }
end
