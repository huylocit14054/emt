class User < ApplicationRecord
  default_scope { order(created_at: :desc) }
  ROLE_ROOT_ADMIN = 'root_admin'
  ROLE_USER = 'user'

  # rubocop:disable Rails/HasManyOrHasOneDependent
  has_many :projects, through: :project_relationships
  has_many :company_members, inverse_of: :user
  has_many :companies, through: :company_members
  # rubocop:enable Rails/HasManyOrHasOneDependent

  has_secure_password

  before_save { self.username = username.downcase }

  validates :password, length: { minimum: 6 }, allow_blank: true
  validates :username, length: { minimum: 6 }, allow_blank: true, uniqueness: { case_sensitive: false }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }, allow_blank: true

  STATUS_PENDING = 'pending'
  STATUS_ACTIVE = 'active'
  STATUS_RESTRICTED = 'restricted'
  enum status: { active: STATUS_ACTIVE, restricted: STATUS_RESTRICTED, pending: STATUS_PENDING }
  def root_admin?
    role == ROLE_ROOT_ADMIN
  end

  def self.new_token
    SecureRandom.urlsafe_base64
  end
end
