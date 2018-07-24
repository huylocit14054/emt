class Types::Company < Types::BaseObject
  description 'Company Type'

  field :id, ID, null: false
  field :name, String, null: false
  field :address, String
  field :logo, String
  field :description, String
  field :email, String, null: false
  field :phone_number, String
  field :company_member_count, Int, null: false
  field :created_at, Types::DateTime, null: false
  field :updated_at, Types::DateTime, null: false

  # Relationships
  field :company_members, [Types::CompanyMember], null: false
  field :users, [Types::User], null: false
  field :projects, [Types::Project, null: true], null: false
  field :services, [Types::Service], null: false
  field :plans, Types::Plan, null: false
end
