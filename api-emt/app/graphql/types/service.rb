class Types::Service < Types::BaseObject
  description 'Service Type'

  field :id, ID, null: false
  field :name, String, null: false
  field :description, String, null: false
  field :created_at, Types::DateTime, null: false
  field :updated_at, Types::DateTime, null: false

  # Relationship
  field :plans, [Types::Plan, null: true], null: false
  field :plan_services, [Types::PlanService, null: true], null: false
end
