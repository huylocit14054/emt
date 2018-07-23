class Project < ApplicationRecord
  has_many :member_relationships,
           class_name: 'ProjectMember',
           foreign_key: 'project_id',
           dependent: :destroy,
           inverse_of: :project
  has_many :members, through: :member_relationships, source: :user
  has_many :dimensions, dependent: :destroy
  has_many :rules, dependent: :destroy
  has_many :utms, through: :member_relationships
  belongs_to :company, inverse_of: :projects

  validates :name, length: { minimum: 3 }, allow_blank: true, uniqueness: { scope: :company_id }

  # generate records for assignment view table
  # return an array json
  # [
  #   {
  #     member_id,
  #     member_name,
  #     (all dimension of the project will be listed and)
  #     dimension1 => {id, category, options: [{id, authorization_id, option_id},{id, authorization_id, option_id}]}}]

  def self.generate_dimensions_assigment_table(project_id:) # rubocop:disable Metrics/MethodLength
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
            when 'input'
              if @authorization_dimension
                json.assigned true
              else
                json.assigned false
              end
              # when the dimension is selection type the option authorization of the dimension will be load and put to the record
            when 'selection'
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
  # return array
  # [
  #   {
  #     label => dimension.name,
  #     value => dimension.id,
  #     key => dimension.id,
  #     (all dimension option if dimension is input it dose not have children)
  #     children => [
  #       {
  #         label => dimension.name: option.name,
  #         value => dimension.id-option.id,
  #         key => dimension.id-option.id
  #       }
  #     ]
  #   }
  # ]
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
          # loop through all option and create key
          json.children @options do |option|
            # create value for value and key using dimension id + its option id
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

  # assign authorization for each user
  def self.assign_dimension_for_members(members:, project_id:, choices:)
    # split array
    choices_array = split_array(choices: choices)
    members.each do |user_id|
      create_authorization_and_option(
        user_id: user_id,
        project_id: project_id,
        choices_array: choices_array
      )
    end
  end

  # update user assignment by delete all record and create new record
  def self.update_member_assignments(member_id:, new_assignments:)
    @member = ProjectMember.find(member_id)
    # destroy all the authorization
    @member.authorizations.destroy_all
    assign_dimension_for_members(
      members: [@member.user_id.to_s],
      project_id: @member.project_id,
      choices: new_assignments
    )
  end

  # split array by "-"
  # input ["1","2-1","2-2"] => [["1"],["2","1"],["2","2"]]
  def self.split_array(choices:)
    choices_array = []
    choices.each do |choice|
      choice = choice.split('-')
      choices_array << choice
    end
    choices_array
  end

  # create authorization and option authorization for each user
  def self.create_authorization_and_option(user_id:, project_id:, choices_array:)
    member = ProjectMember.find_by(user_id: user_id, project_id: project_id)
    choices_array.each do |c|
      dimension_id = c[0]
      begin
        # create dimension
        auth = member.authorizations.create!(dimension_id: dimension_id)
      rescue StandardError
        auth = member.authorizations.find_by(dimension_id: dimension_id)
        next
      ensure
        if c.length > 1
          begin
            auth.option_authorizations.create!(option_id: c[1])
          rescue StandardError
            next
          end
        elsif Dimension.find(dimension_id).category.eql? 'selection'
          authorize_all_option(dimension_id: dimension_id, auth: auth)
        end
      end
    end
  end

  # althorize all options for selection dimension
  def self.authorize_all_option(dimension_id:, auth:)
    all_options = Dimension.find(dimension_id).options
    all_options.each do |option|
      begin
        auth.option_authorizations.create!(option: option)
      rescue ActiveRecord::RecordNotUnique
        next
      end
    end
  end
end
