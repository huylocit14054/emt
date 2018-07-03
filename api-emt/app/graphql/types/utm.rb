class Types::Utm < Types::BaseObject
  description 'Utm Type'

  field :id, ID, null: false
  field :url, String, null: false
  field :created_at, Types::DateTime, null: false
  field :updated_at, Types::DateTime, null: false

  # Relationship
  field :project_member, Types::ProjectMember, null: false
end
