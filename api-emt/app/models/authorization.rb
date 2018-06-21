class Authorization < ApplicationRecord
    belongs_to :project_member
    has_many :option_authorizations, dependent: :destroy
    belongs_to :dimension
end
