class Types::PlanService < Types::BaseObject
  description 'Plan Service Type'

  field :id, ID, null: false
  field :created_at, Types::DateTime, null: false
  field :updated_at, Types::DateTime, null: false

  # Relationship
  field :plan, Types::Plan, null: false
  field :service, Types::Service, null: false
end
