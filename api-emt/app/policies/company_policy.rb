class CompanyPolicy < ApplicationPolicy
  def show?
    company_member = CompanyMember.find_by(company_id: record.id, user_id: user.id)
    is_root_admin = user.role == User::ROLE_ROOT_ADMIN
    is_root_admin || (!company_member.nil? && company_member.status != CompanyMember::STATUS_RESTRICTED)
  end
end
