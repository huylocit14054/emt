class ProjectPolicy < ApplicationPolicy
  def show?
    user.root_admin? || record.members.any? { |member| member.id == user.id }
  end
end
