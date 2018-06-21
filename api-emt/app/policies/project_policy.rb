class ProjectPolicy < ApplicationPolicy
  def show?
    record.members.any? { |member| member.id == user.id }
  end
end
