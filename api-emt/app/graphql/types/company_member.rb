class Types::CompanyMember < Types::BaseObject
  description 'Company Member Type'

  field :id, ID, null: false
  field :roles, [String], null: false
  # field :status, String, null: false
  field :created_at, Types::DateTime, null: false
  field :updated_at, Types::DateTime, null: false

  # Relationships
  field :company, Types::Company, null: false
  field :user, Types::User, null: false
  field :project_relationships, [Types::ProjectMember, null: true], null: false
end
