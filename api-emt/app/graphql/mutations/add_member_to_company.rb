class Mutations::AddMemberToCompany < Mutations::BaseMutation
  argument :company_id, ID, required: true
  argument :email, String, required: true
  argument :roles, [String, null: true], required: false

  field :added_member, Types::CompanyMember, null: false

  def resolve(company_id:, email:, roles:)
    company_member = CompanyMember.create_staff(company_id: company_id, user_email: email, roles: roles)
    if !company_member.valid?
      GraphQL::ExecutionError.new(company_member.errors.full_messages.join(', '))
    else
      {
        added_member: company_member
      }
    end
  end
end
