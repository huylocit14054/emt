class ProjectMember < ApplicationRecord
  extend OrderAsSpecified
  belongs_to :user, inverse_of: :project_relationships
  belongs_to :project, counter_cache: :member_count, inverse_of: :member_relationships
  has_many :authorizations, dependent: :destroy
  has_many :dimensions, through: :authorizations
  has_many :utms, dependent: :destroy

  DIMENSION_CATEGORY_SELECTION = 'selection'
  DIMENSION_CATEGORY_INPUT = 'input'

  # get the authorization dimensions as well as authorization option of a user in project
  # return a array format ["authorization.dimesion_id", "authorization.dimesion_id-option_authorization.option_id"]
  def self.get_authorize_array(project_member_id:)
    # get the project member record
    @project_member = ProjectMember.find(project_member_id)
    # get all of the authorization records
    @authorizations = @project_member.authorizations
    @member_assignment = []
    @authorizations.each do |authorization|
      @dimension = authorization.dimension
      # check the dimension is input
      if @dimension.category == DIMENSION_CATEGORY_INPUT
        # push the dimesion id as string to the member_assignment array
        @member_assignment.push(@dimension.id.to_s)
      # the dimension is selection
      else
        @options = @dimension.options
        @options_authorization = authorization.option_authorizations
        # the number of dimension's options equal to the number of option authorizations
        # so all the options of the selection dimension is in the option authorizations
        # just need to return the dimension id
        if @options.count == @options_authorization.count
          @member_assignment.push(@dimension.id.to_s)
        # the number dose not equal to each other
        # need to return with format "dimension_id-option_id"
        else
          @options_authorization.each { |op_auth| @member_assignment.push("#{@dimension.id}-#{op_auth.option_id}") }
        end
      end
    end
    @member_assignment
  end
end
