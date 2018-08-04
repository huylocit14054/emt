class Mutations::CreatePlan < Mutations::BaseMutation
  argument :name, String, required: true
  argument :description, String, required: true
  argument :service_ids, [String], required: true

  field :created_plan, Types::Plan, null: true

  def resolve(name:, description:, service_ids:)
    plan = Plan.create(name: name, description: description)
    if !plan.valid?
      GraphQL::ExecutionError.new(new_rule.errors.full_messages.join(', '))
    else
      service_ids.each do |service_id|
        PlanService.create(plan: plan, service_id: service_id)
      end
      {
        created_plan: plan.reload
      }
    end
  end
end
