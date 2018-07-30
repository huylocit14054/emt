class Types::Company < Types::BaseObject
  description 'Company Type'

  field :id, ID, null: false
  field :name, String, null: false
  field :address, String, null: true
  field :logo, String, null: true
  field :description, String, null: true
  field :email, String, null: false
  field :phone_number, String, null: true
  field :company_member_count, Int, null: false
  field :created_at, Types::DateTime, null: false
  field :updated_at, Types::DateTime, null: false

  # Relationships
  field :company_members, [Types::CompanyMember], null: false
  field :users, [Types::User], null: false
  field :projects, [Types::Project, null: true], null: false
  field :services, [Types::Service], null: false
  field :plan, Types::Plan, null: false

  # Bonus
  field :member_id_of_current_user, ID, null: true
  def member_id_of_current_user
    object.company_members.find_by(user: context[:current_user]).id
  end
end
