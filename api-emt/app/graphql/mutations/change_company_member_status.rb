class Mutations::ChangeCompanyMemberStatus < Mutations::BaseMutation
  argument :company_member_id, ID, required: true
  argument :status, String, required: true

  field :affected_company_member, Types::CompanyMember, null: false

  # attributes['status'] includes 'active' or 'restricted'
  def resolve(company_member_id:, status:)
    company_member = CompanyMember.find(company_member_id)
    is_updated = company_member.update(status: status)
    if is_updated
      {
        affected_company_member: company_member.reload
      }
    else
      GraphQL::ExecutionError.new(company_member.errors.full_messages.join(', '))
    end
  end
end
