class OptionAuthorization < ApplicationRecord
    belongs_to :authorization
    belongs_to :option
end
