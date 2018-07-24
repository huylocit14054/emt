class ProjectPolicy < ApplicationPolicy
  def show?
    project_member = ProjectMember.find_by(project_id: record.id, user_id: user.id)
    !project_member.nil? && project_member.status != ProjectMember::PROJECT_STATUS_RESTRICTED
  end
end
