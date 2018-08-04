class Types::Company < Types::BaseObject
  description 'Company Type'

  field :id, ID, null: false
  field :name, String, null: false
  field :address, String, null: true
  field :logo, String, null: true
  field :description, String, null: true
  field :email, String, null: true
  field :phone_number, String, null: true
  field :company_member_count, Int, null: true
  field :created_at, Types::DateTime, null: false
  field :updated_at, Types::DateTime, null: false

  # Relationships
  field :company_members, [Types::CompanyMember], null: false do
    argument :first, Int, required: false
  end

  # get company members according to the optional first argument
  def company_members(first: nil)
    if first
      object.company_members.first(first)
    else
      object.company_members
    end
  end
  field :users, [Types::User], null: false
  field :projects, [Types::Project, null: true], null: false
  field :services, [Types::Service], null: false
  field :plan, Types::Plan, null: false

  # Bonus
  field :current_user_as_member, Types::CompanyMember, null: true
  def current_user_as_member
    object.company_members.find_by(user: context[:current_user])
  end
end
