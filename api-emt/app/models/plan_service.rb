class PlanService < ApplicationRecord
  belongs_to :plan, inverse_of: :plan_services
  belongs_to :service, inverse_of: :plan_services
end
