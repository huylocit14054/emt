class ProjectPolicy < ApplicationPolicy
  def show?
    company_member = CompanyMember.find_by(
      company_id: record.company.id,
      user_id: user.id
    )
    project_member = ProjectMember.find_by(
      project_id: record.id,
      company_member_id: company_member.id
    )
    !project_member.nil? && project_member.status != ProjectMember::PROJECT_STATUS_RESTRICTED
  end
end
