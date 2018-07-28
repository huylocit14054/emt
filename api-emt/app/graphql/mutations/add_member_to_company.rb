class Mutations::AddMemberToCompany < Mutations::BaseMutation
  argument :company_id, ID, required: true
  argument :email, String, required: true
  argument :roles, [String, null: true], required: false
  argument :status, Types::CompanyStatusCategory, required: false

  field :added_member, Types::CompanyMember, null: false

  def resolve(company_id:, email:, roles:, status:)
    # check whether user or company exist
    company = Company.find(company_id)
    company || GraphQL::ExecutionError.new("No company named #{company.name}.")
    user = User.find_by(email: email)
    user || GraphQL::ExecutionError.new("No user with email #{email}.")
    # check whether company already has the member
    if CompanyMember.exists?(company_id: company_id, user_id: user.id)
      GraphQL::ExecutionError.new("#{user.username} already has access.")
    else
      # add member to company
      company_member = CompanyMember.create(company_id: company_id, user_id: user.id, roles: roles, status: status)
      {
        added_member: company_member
      }
    end
  end
end
