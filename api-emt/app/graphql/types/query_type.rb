class Types::QueryType < Types::BaseObject
  # Add root-level fields here.
  # They will be entry points queries on your schema.


  field :current_user, Types::User, null: true, description: "Current User"
  def current_user
    context[:current_user]
  end

  field :users, [Types::User], null: false
  def users
    ::User.where.not(id: context[:current_user].id).order(created_at: :desc)
  end

  field :projects_as_admin_of_current_user, [Types::Project], null: false 
  def projects_as_admin_of_current_user
    ::Project.joins(:member_relationships).where(project_members: {role: "project_admin", user_id: context[:current_user].id}).order(created_at: :desc)
  end

  field :projects_as_member_of_current_user, [Types::Project], null: false 
  def projects_as_member_of_current_user
    ::Project.joins(:member_relationships).where(project_members: {role: "member", user_id: context[:current_user].id}).order(created_at: :desc)
  end

  field :project_member, Types::ProjectMember, null: false, description: "Project Member" do
    argument :id, ID, required: false
  end
  def project_member(id:)
    ::ProjectMember.find(id)
  end
  
  field :project, Types::Project, null: false, description: "Project" do
    argument :id, ID, required: false
  end
  def project(id:)
    ::Project.find(id)
  end
  
  field :dimension, Types::Dimension, null: false, description: "Dimension" do
    argument :id, ID, required: false
  end
  def dimension(id:)
    ::Dimension.find(id)
  end

  field :option, Types::Option, null: false, description: "Option" do
    argument :id, ID, required: false
  end
  def option(id:)
    ::Option.find(id)
  end
  
  field :authorization, Types::Authorization, null: false, description: "Authorization" do
    argument :id, ID, required: false
  end
  def authorization(id:)
    ::Authorization.find(id)
  end

  field :option_authorization, Types::OptionAuthorization, null: false, description: "Option Authorization" do
    argument :id, ID, required: false
  end
  def option_authorization(id:)
    ::OptionAuthorization.find(id)
  end

  # suggestions on typing in adding members into project
  field :user_suggestion, [Types::User, null: true], null: false do
    argument :query, String, required: true
  end
  def user_suggestion(query:)
    suggestion = ::User.where('username LIKE ? OR email LIKE ?', "%#{query}%", "%#{query}%")
  end

  # suggestions on typing in dimensions assignment
  field :member_suggestion, [Types::User, null: true], null: false do
    argument :project_id, ID, required: true
    argument :query, String, required: true
  end
  def member_suggestion(project_id:, query:)
    project = ::Project.find(project_id)
    suggestions = project.members.where('username LIKE ? OR email LIKE ?', "%#{query}%", "%#{query}%")
  end
  
  #return member list of a project 
  field :project_members, [Types::User], null: false do
    argument :project_id, ID, required: true
  end
  def project_members(project_id:)
    project = ::Project.find(project_id)
    members = project.members
  end

  #return dimension list of a project 
  field :project_dimensions, [Types::Dimension], null: false do
    argument :project_id, ID, required: true
  end
  def project_dimensions(project_id:)
    project = ::Project.find(project_id)
    members = project.dimensions
  end

   #return table of dimensions assignment
   field :dimensions_assignment, Types::Json, null: false do
    argument :project_id, ID, required: true
  end
  def dimensions_assignment(project_id:)
    ::Project.generate_dimensions_assigment_table(project_id: project_id)
  end
  
end



