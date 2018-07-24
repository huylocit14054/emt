class Types::Plan < Types::BaseObject
  description 'Plan Type'

  field :id, ID, null: false
  field :name, String, null: false
  field :description, String, null: false
  field :created_at, Types::DateTime, null: false
  field :updated_at, Types::DateTime, null: false

  # Relationship
  field :companies, [Types::Company, null: true], null: false
  field :services, [Types::Service, null: true], null: false
  field :plan_services, [Types::PlanService, null: true], null: false
end
