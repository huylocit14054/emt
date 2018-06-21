class User < ApplicationRecord
  ROLE_ROOT_ADMIN = 'root_admin'
  ROLE_USER = 'user'

  has_many :project_relationships, class_name: 'ProjectMember' , foreign_key: 'user_id'
  has_many :projects, through: :project_relationships

  has_secure_password

  before_save { self.username = username.downcase }

  validates :password, length: {minimum: 6}, allow_blank: true
  validates :username, length: {minimum: 6}, allow_blank: true, uniqueness: {case_sensitive: false}
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, length: {maximum: 255},
    format: {with: VALID_EMAIL_REGEX},
    uniqueness: {case_sensitive: false}, allow_blank: true

  def root_admin?
    self.role == ROLE_ROOT_ADMIN
  end
end
