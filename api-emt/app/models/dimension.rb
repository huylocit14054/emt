class Dimension < ApplicationRecord
    belongs_to :project
    has_many :options
    has_many :authorizations

    validates :name, uniqueness: {scope: :project_id}
end
