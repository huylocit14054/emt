class ProjectMember < ApplicationRecord
    belongs_to :user 
    belongs_to :project , counter_cache: :member_count
    has_many :authorizations
    has_many :dimensions, through: :authorizations 
end
