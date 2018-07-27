class Mutations::CreateProject < Mutations::BaseMutation
  argument :attributes, Types::Json, required: true

  field :created_project, Types::Project, null: true

  def resolve(attributes:)
    project = Project.create(attributes)
    company_member = CompanyMember.find_by(company_id: attributes['company_id'], user: context[:current_user])

    # Automatically assign RA as PA in new created project
    ProjectMember.create(project: project, company_member: company_member, role: 'project_admin')
    if !project.valid?
      GraphQL::ExecutionError.new(project.errors.full_messages.join(', '))
    else
      {
        created_project: project
      }
    end
  end
end
