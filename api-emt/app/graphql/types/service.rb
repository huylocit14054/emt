class Types::Service < Types::BaseObject
  description 'Service Type'

  field :id, ID, null: false
  field :name, String, null: false
  field :description, String, null: false
  field :created_at, Types::DateTime, null: false
  field :updated_at, Types::DateTime, null: false

  # Relationship
  field :project, Types::Project, null: false
  field :authorizations, [Types::Authorization], null: false
  field :options, [Types::Option], null: false
end
