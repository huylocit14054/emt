class Types::User < Types::BaseObject
  field :id, ID, null: false
  field :username, String, null: false
  field :email, String, null: false
  field :role, String, null: false
  field :avatar, String, null: false
  field :created_at, Types::DateTime, null: false
  field :updated_at, Types::DateTime, null: false

  #Relationship
  field :projects, [Types::Project], null: false
  field :project_relationships, [Types::ProjectMember], null: false
end
