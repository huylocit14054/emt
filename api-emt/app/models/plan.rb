class Plan < ApplicationRecord
  # rubocop:disable Rails/HasManyOrHasOneDependent
  has_many :plan_services, inverse_of: :plan, dependent: :destroy
  has_many :services, through: :plan_services
  has_many :companies, inverse_of: :plan
  # rubocop:enable Rails/HasManyOrHasOneDependent

  validates :name, uniqueness: { case_sensitive: false }

  # update plan with services
  def self.update_plan(plan_id:, name:, description:, service_ids:)
    plan = Plan.find(plan_id)
    is_update = plan.update(name: name, description: description)
    if is_update && !service_ids.empty?
      plan.plan_services.destroy_all
      service_ids.each do |service_id|
        plan.plan_services.create(service_id: service_id)
      end
    end
    plan
  end
end
