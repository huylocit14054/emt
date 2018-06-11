class Authorization < ApplicationRecord
    belongs_to :project_member
    has_many :option_authorizations
    belongs_to :dimension
end
