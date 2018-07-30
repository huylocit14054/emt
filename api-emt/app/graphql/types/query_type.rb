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

  field :projects_as_admin_of_current_user, [Types::Project], null: false do
    argument :company_id, ID, required: true
  end

  def projects_as_admin_of_current_user(company_id:)
    company_member = CompanyMember.find_by(company_id: company_id, user_id: context[:current_user].id)
    Project.joins(:member_relationships).where(project_members:
      { role: ProjectMember::ROLE_PROJECT_ADMIN, company_member_id: company_member.id, status:
        ProjectMember::PROJECT_STATUS_ACTIVE }).order(created_at: :desc)
  end

  field :projects_as_member_of_current_user, [Types::Project], null: false do
    argument :company_id, ID, required: true
  end

  def projects_as_member_of_current_user(company_id:)
    company_member = CompanyMember.find_by(company_id: company_id, user_id: context[:current_user].id)
    ::Project.joins(:member_relationships).where(project_members:
      { role: ProjectMember::ROLE_PROJECT_MEMBER,
        company_member_id: company_member.id,
        status: ProjectMember::PROJECT_STATUS_ACTIVE }).order(created_at: :desc)
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
    argument :company_id, ID, required: true
  end

  def users_suggestion(company_id:, query:)
    ::Company.company_member_sugestion(company_id: company_id, query: query)
  end

  # suggestions on typing in dimensions assignment
  field :members_suggestion, [Types::User, null: true], null: false do
    argument :project_id, ID, required: true
    argument :query, String, required: true
  end

  def members_suggestion(project_id:, query:)
    project = ::Project.find(project_id)
    project.members.joins(:user).where(
      'users.username LIKE ? OR users.email LIKE ?', "%#{query}%", "%#{query}%"
    ).map(&:user)
  end

  # return member list of a project
  field :project_members, [Types::ProjectMember], null: false do
    argument :project_id, ID, required: true
  end

  def project_members(project_id:)
    project = ::Project.find(project_id)
    project.member_relationships.order_as_specified(
      role: ['project_admin']
    ).order_as_specified(status: ['active']).order(:created_at)
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

  # return current applied rule by project id
  field :current_applied_rule_of_project, Types::Rule, null: true do
    argument :project_id, ID, required: true
  end

  def current_applied_rule_of_project(project_id:)
    project = ::Project.find(project_id)
    project.rules.find_by(is_applied: true)
  end

  # get authorized dimensions for current user in specific project
  field :member_assignments_details, [Types::Authorization], null: false do
    argument :project_id, ID, required: true
  end

  def member_assignments_details(project_id:)
    project = Project.find(project_id)
    company_member = CompanyMember.find_by(user: context[:current_user], company_id: project.company_id)
    member = ::ProjectMember.find_by(company_member: company_member, project_id: project_id)
    member.authorizations
  end

  # return dimension list of a project
  field :member_utm_history, [Types::Utm], null: false do
    argument :project_id, ID, required: true
  end

  def member_utm_history(project_id:)
    project = Project.find(project_id)
    company_member = CompanyMember.find_by(user: context[:current_user], company_id: project.company_id)
    project_member = ::ProjectMember.find_by(project_id: project_id, company_member: company_member)
    project_member.utms.order(created_at: :desc)
  end
  field :utm_analysis, [Types::Utm], null: false do
    argument :project_id, ID, required: true
  end
  def utm_analysis(project_id:)
    ::Project.find(project_id).utms.order(created_at: :desc)
  end

  field :company, Types::Company, null: true do
    argument :company_id, ID, required: true
  end

  def company(company_id:)
    ::Company.find(company_id)
  end

  field :service, Types::Service, null: false do
    argument :service_id, ID, required: true
  end

  def service(service_id:)
    ::Service.find(service_id)
  end

  field :all_plans, [Types::Plan], null: false

  def all_plans
    ::Plan.all.order(created_at: :desc)
  end

  field :all_companies, [Types::Company], null: false

  def all_companies
    ::Company.all.order(created_at: :desc)
  end
  
  # return all services
  field :services, [Types::Service], null: false, description: 'Get all services'

  def services
    ::Service.all.order(created_at: :desc)
  end
end
