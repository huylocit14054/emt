class Dimension < ApplicationRecord
    belongs_to :project
    has_many :options
    has_many :authorizations   
end
