class Dimension < ApplicationRecord
    belongs_to :project
    has_many :options, dependent: :destroy
    has_many :authorizations

    validates :name, uniqueness: {scope: :project_id}

    before_update :check_category_change 
    
    CATEGORY_INPUT = "input"
    CATEGORY_SELECTION = "selection"
    private 

    # when changing from selection to input so all the options and all the option_authorizations must be deleted 
    def check_category_change
        # if the category has changed and the changed type is input 
        # => delete all options and option_authorizations
        if self.category_changed? && self.category == CATEGORY_INPUT
            self.options.destroy_all
        end 
    end 
end
