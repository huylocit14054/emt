class Types::QueryType < Types::BaseObject
  # Add root-level fields here.
  # They will be entry points queries on your schema.

  field :current_user, Types::User, null: true, description: 'Current User'

  def current_user
    context[:current_user]
  end

  field :users, [Types::User], null: false

  def users
    ::User.where.not(id: context[:current_user].id).order(created_at: :desc)
  end

  field :projects_as_admin_of_current_user, [Types::Project], null: false

  def projects_as_admin_of_current_user
    ::Project.joins(:member_relationships).where(project_members:
      { role: 'project_admin', user_id: context[:current_user].id }).order(created_at: :desc)
  end

  field :projects_as_member_of_current_user, [Types::Project], null: false

  def projects_as_member_of_current_user
    ::Project.joins(:member_relationships).where(project_members:
      { role: 'member', user_id: context[:current_user].id }).order(created_at: :desc)
  end

  field :project_member, Types::ProjectMember, null: false, description: 'Project Member' do
    argument :id, ID, required: false
  end

  def project_member(id:)
    ::ProjectMember.find(id)
  end

  field :project, Types::Project, null: false, description: 'Project' do
    argument :id, ID, required: false
  end

  def project(id:)
    ::Project.find(id)
  end

  field :dimension, Types::Dimension, null: false, description: 'Dimension' do
    argument :id, ID, required: false
  end

  def dimension(id:)
    ::Dimension.find(id)
  end

  field :option, Types::Option, null: false, description: 'Option' do
    argument :id, ID, required: false
  end

  def option(id:)
    ::Option.find(id)
  end

  field :dimension_options, [Types::Option], null: false do
    argument :dimension_id, ID, required: false
  end

  def dimension_options(dimension_id:)
    ::Dimension.find(dimension_id).options
  end

  field :authorization, Types::Authorization, null: false, description: 'Authorization' do
    argument :id, ID, required: false
  end

  def authorization(id:)
    ::Authorization.find(id)
  end

  field :option_authorization, Types::OptionAuthorization, null: false, description: 'Option Authorization' do
    argument :id, ID, required: false
  end

  def option_authorization(id:)
    ::OptionAuthorization.find(id)
  end

  # suggestions on typing in adding members into project
  field :users_suggestion, [Types::User, null: true], null: false do
    argument :query, String, required: true
  end

  def users_suggestion(query:)
    ::User.where('username LIKE ? OR email LIKE ?', "%#{query}%", "%#{query}%")
  end

  # suggestions on typing in dimensions assignment
  field :members_suggestion, [Types::User, null: true], null: false do
    argument :project_id, ID, required: true
    argument :query, String, required: true
  end

  def members_suggestion(project_id:, query:)
    project = ::Project.find(project_id)
    project.members.where('username LIKE ? OR email LIKE ?', "%#{query}%", "%#{query}%")
  end

  # return member list of a project
  field :project_members, [Types::ProjectMember], null: false do
    argument :project_id, ID, required: true
  end

  def project_members(project_id:)
    project = ::Project.find(project_id)
    project.member_relationships.order_as_specified(role: ['project_admin']).order(:created_at)
  end

  # return dimension list of a project
  field :project_dimensions, [Types::Dimension], null: false do
    argument :project_id, ID, required: true
  end

  def project_dimensions(project_id:)
    project = ::Project.find(project_id)
    project.dimensions.order(created_at: :desc)
  end

  field :project_dimensions_tree, Types::Json, null: false do
    argument :project_id, ID, required: true
  end

  def project_dimensions_tree(project_id:)
    ::Project.generate_dimensions_selection_tree(project_id: project_id)
  end

  # return table of dimensions assignment
  field :dimensions_assignment, Types::Json, null: false do
    argument :project_id, ID, required: true
  end

  def dimensions_assignment(project_id:)
    ::Project.generate_dimensions_assigment_table(project_id: project_id)
  end

  # return member autheticate assignment
  field :member_assignments, [String], null: false do
    argument :member_id, ID, required: true
  end

  def member_assignments(member_id:)
    ::ProjectMember.get_authorize_array(project_member_id: member_id)
  end

  # return dimension list of a project
  field :project_rules, [Types::Rule], null: false do
    argument :project_id, ID, required: true
  end

  def project_rules(project_id:)
    project = ::Project.find(project_id)
    project.rules.order_as_specified(is_applied: [true]).order(:created_at)
  end

  # return dimension list of a project
  field :member_utm_history, [Types::Utm], null: false do
    argument :project_member_id, ID, required: true
  end

  def member_utm_history(project_member_id:)
    project_member = ::ProjectMember.find(project_member_id)
    project_member.utms.order(created_at: :desc)
  end
end
