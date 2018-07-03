class Types::ProjectMember < Types::BaseObject
  description 'Project Member Type'

  field :id, ID, null: false
  field :role, String, null: false
  field :status, String, null: false
  field :created_at, Types::DateTime, null: false
  field :updated_at, Types::DateTime, null: false

  # Relationships
  field :project, Types::Project, null: false
  field :user, Types::User, null: false
  field :authorizations, [Types::Authorization], null: false
  field :authorized_dimensions, [ID], null: false

  def authorized_dimensions
    object.dimensions.ids
  end
end
