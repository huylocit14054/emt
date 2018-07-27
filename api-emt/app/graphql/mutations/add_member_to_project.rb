class Mutations::AddMemberToProject < Mutations::BaseMutation
  argument :company_member_id, ID, required: true
  argument :project_id, ID, required: true
  argument :role, String, required: true

  field :added_member, Types::ProjectMember, null: true

  def resolve(company_member_id:, project_id:, role:)
    company_member = CompanyMember.find(company_member_id)
    # check whether user exist
    if !company_member
      GraphQL::ExecutionError.new("No user named #{username}.")
    # check whether the staff is banned by company or not
    elsif company_member.status == CompanyMember::STATUS_RESTRICTED
      GraphQL::ExecutionError.new("#{company_member.user.username} has been banned by the company admin.")
    # check whether the staff has access to UTM service
    elsif !company_member.roles.join.include?(Service::UTM_SERVICE)
      GraphQL::ExecutionError.new("#{company_member.user.username} doesn't has access in UTM Builder service.")
    # check whether project already has the user
    elsif ProjectMember.exists?(company_member_id: company_member_id, project_id: project_id)
      GraphQL::ExecutionError.new("#{company_member.user.username} already has access.")
    # create relationship
    else
      project_member = ProjectMember.create(company_member_id: company_member_id, project_id: project_id, role: role)
      {
        added_member: project_member
      }
    end
  end
end
