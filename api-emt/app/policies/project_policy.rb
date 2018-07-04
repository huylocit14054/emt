class ProjectPolicy < ApplicationPolicy
  def show?
    project_member = ProjectMember.find_by(project_id: record.id, user_id: user.id)
    project_member && project_member.status != 'restricted'
  end
end
