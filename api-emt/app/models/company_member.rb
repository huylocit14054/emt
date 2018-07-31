class CompanyMember < ApplicationRecord
  # rubocop:disable Rails/HasManyOrHasOneDependent
  belongs_to :company, counter_cache: :company_member_count, inverse_of: :company_members
  belongs_to :user, inverse_of: :company_members
  has_many :project_relationships,
           class_name: 'ProjectMember',
           foreign_key: 'company_member_id',
           inverse_of: :company_member
  # rubocop:enable Rails/HasManyOrHasOneDependent
  validate :check_valid
  validates :user_id, uniqueness: { scope: :company_id }

  ROLE_COMPANY_ADMIN = 'admin'
  ROLE_COMPANY_MEMBER = 'staff'
  ROLE_OMS_MANAGER = 'oms_manager'
  ROLE_UTM_MANAGER = 'utm_manager'
  ROLE_OMS_MEMBER = 'oms_member'
  ROLE_UTM_MEMBER = 'utm_member'
  STATUS_ACTIVE = 'active'
  STATUS_RESTRICTED = 'restricted'

  enum status: { active: STATUS_ACTIVE, restricted: STATUS_RESTRICTED }

  def self.create_staff(company_id:, user_email:, roles:)
    user = User.find_by(email: user_email)
    user ||= User.create(email: user_email, username: user_email, password: User.new_token)
    CompanyMember.create(user: user, company_id: company_id, roles: roles)
  end

  private

  def check_valid
    company = Company.find(company_id)
    company || errors.add(:company_id, 'is not found')
    user = User.find(user_id)
    user || errors.add(:user_id, 'is not found')
  end
end
