class Project < ApplicationRecord
  has_many :member_relationships, class_name: "ProjectMember", foreign_key: "project_id"
  has_many :members, through: :member_relationships, source: :user
  has_many :dimensions

  validates :name, length: {minimum: 3}, allow_blank: true, uniqueness: true

  # generate records for assignment view table
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

  # generate selection tree json for assign dimension
  def self.generate_dimensions_selection_tree(project_id:)
    # get the project
    @project = Project.find(project_id)
    # get project's dimension
    @dimensions = @project.dimensions
    @selection_tree = Jbuilder.encode do |json|
      # create array with the dimension
      json.array! @dimensions do |dimension|
        json.label dimension.name
        json.value dimension.id.to_s
        json.key dimension.id.to_s
        # get option of each dimension
        @options = dimension.options
        # if the dimension is input the options will return [] and dose not have children key
        unless @options.empty?
          #loop through all option and create key
          json.children @options do |option|
            #create value for value and key using dimension id + its option id
            @value = "#{dimension.id}-#{option.id}"
            @name = "#{dimension.name}: #{option.name}"
            json.label @name
            json.value @value
            json.key @value
          end
        end
      end
    end
    JSON.parse(@selection_tree)
  end

  # update user assignment by delete all record and create new record
  def self update_member_assignments(member_id:, new_assignments: )
    @member = ProjectMember.find(member_id)
    # destroy all the authorization
    @member.authorizations.destroy_all 
  end 

end
