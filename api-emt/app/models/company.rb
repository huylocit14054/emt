class Company < ApplicationRecord
  # rubocop:disable Rails/HasManyOrHasOneDependent
  has_many :company_members, inverse_of: :company
  has_many :users, through: :company_members
  has_many :projects, inverse_of: :company
  # rubocop:ensable Rails/HasManyOrHasOneDependent
end
