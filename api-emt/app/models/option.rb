class Option < ApplicationRecord
    belongs_to :dimension
    has_many :option_authorizations
end
