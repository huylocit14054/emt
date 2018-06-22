class Option < ApplicationRecord
    belongs_to :dimension
    has_many :option_authorizations, dependent: :destroy

    validates :name, uniqueness: {scope: :dimension_id}
end
