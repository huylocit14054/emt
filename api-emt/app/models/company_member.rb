class CompanyMember < ApplicationRecord
  # rubocop:disable Rails/HasManyOrHasOneDependent
  belongs_to :company, counter_cache: :company_member_count, inverse_of: :company_members
  belongs_to :user, inverse_of: :company_members
  has_many :project_relationships,
           class_name: 'ProjectMember',
           foreign_key: 'company_member_id',
           inverse_of: :company_member
  # rubocop:enable Rails/HasManyOrHasOneDependent

  ROLE_COMPANY_ADMIN = 'admin'
  ROLE_COMPANY_MEMBER = 'staff'
  ROLE_OMS_MANAGER = 'oms_manager'
  ROLE_UTM_MANAGER = 'utm_manager'
  ROLE_OMS_MEMBER = 'oms_member'
  ROLE_UTM_MEMBER = 'utm_member'
  STATUS_ACTIVE = 'active'
  STATUS_RESTRICTED = 'restricted'

  enum status: { active: STATUS_ACTIVE, restricted: STATUS_RESTRICTED }
end
