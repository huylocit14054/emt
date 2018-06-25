class User < ApplicationRecord
  ROLE_ROOT_ADMIN = 'root_admin'
  ROLE_USER = 'user'

  # rubocop:disable Rails/HasManyOrHasOneDependent
  has_many :project_relationships,
           class_name: 'ProjectMember',
           foreign_key: 'user_id',
           inverse_of: :user
  has_many :projects, through: :project_relationships
  # rubocop:enable Rails/HasManyOrHasOneDependent

  has_secure_password

  before_save { self.username = username.downcase }

  validates :password, length: { minimum: 6 }, allow_blank: true
  validates :username, length: { minimum: 6 }, allow_blank: true, uniqueness: { case_sensitive: false }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }, allow_blank: true

  def root_admin?
    role == ROLE_ROOT_ADMIN
  end
end
