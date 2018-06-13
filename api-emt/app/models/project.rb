class Project < ApplicationRecord
    has_many :member_relationships , class_name: "ProjectMember", foreign_key: "project_id"
    has_many :members, through: :member_relationships , source: :user
    has_many :dimensions

    validates :name, length: {minimum: 3}, allow_blank: true, uniqueness: true

    # generate records for assignment table 
    # return an array
    def self.generate_dimensions_assigment_table(project_id:)
        # get the project
        @project = Project.find(project_id)
        # get the member relation
        @member_relationships = @project.member_relationships
        # get all the project dimensions
        @dimensions = @project.dimensions 
        records = Jbuilder.encode do |json|
            json.array! @member_relationships do |relationship|
                # in each relationship get the user
                @user = relationship.user
                json.member_id relationship.id
                json.member_name @user.username
                # each user will have the information of each dimension
                @dimensions.each do |dimension|
                    json.set! dimension.name do 
                        json.id dimension.id
                        json.category dimension.category
                        # find the authorization dimension base on the dimension to check whether the user have the dimension authorized
                        @authorization_dimension = relationship.authorizations.find_by(dimension_id: dimension.id)
                        case dimension.category
                        # when the dimension is input type the json will return assigned: boolean
                        when "input"
                            if @authorization_dimension
                                json.assigned true
                            else 
                                json.assigned false
                            end 
                        # when the dimension is selection type the option authorization of the dimension will be load and put to the record
                        when "selection"
                            if @authorization_dimension
                                @options = @authorization_dimension.option_authorizations
                                json.options @options 
                            else 
                                json.options []
                            end 
                        end
                    end  
                end 
            end 
        end 
        JSON.parse(records)
    end
end
