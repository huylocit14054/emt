class Mutations::UpdatePlan < Mutations::BaseMutation
  argument :plan_id, ID, required: true
  argument :name, String, required: true
  argument :description, String, required: true
  argument :service_ids, [String], required: true

  field :updated_plan, Types::Plan, null: true

  def resolve(plan_id:, name:, description:, service_ids:)
    plan = Plan.update_plan(plan_id: plan_id, name: name, description: description, service_ids: service_ids)
    if plan.errors.empty?
      {
        updated_plan: plan.reload
      }
    else
      GraphQL::ExecutionError.new(plan.errors.full_messages.join(', '))
    end
  end
end
