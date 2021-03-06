class Company < ApplicationRecord
  # rubocop:disable Rails/HasManyOrHasOneDependent
  has_many :company_members, inverse_of: :company
  has_many :users, through: :company_members
  has_many :projects, inverse_of: :company
  belongs_to :plan, inverse_of: :companies
  has_many :services, through: :plan
  # Validate
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :email, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }, allow_blank: true

  STATUS_ACTIVE = 'active'
  STATUS_RESTRICTED = 'restricted'
  enum status: { active: STATUS_ACTIVE, restricted: STATUS_RESTRICTED }
  # return the array of Users belong to the company
  def self.company_member_sugestion(company_id:, query:)
    User.joins(%|
      INNER JOIN company_members ON users.id = company_members.user_id
      WHERE company_members.company_id=#{company_id}
      AND ('utm_member' = ANY (roles) OR 'utm_manager' = ANY (roles))
      AND (users.email LIKE '%#{query}%' OR users.username LIKE '%#{query}%')
    |)
  end
end
