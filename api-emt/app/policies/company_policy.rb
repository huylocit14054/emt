class CompanyPolicy < ApplicationPolicy
  def show?
    company_member = CompanyMember.find_by(company_id: record.id, user_id: user.id)
    # !company_member.nil? && company_member.status != 'restricted'
    !company_member.nil?
  end
end
