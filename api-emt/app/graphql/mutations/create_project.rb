class Mutations::CreateProject < Mutations::BaseMutation

    argument :attributes, Types::Json, required: true
    
    field :created_project, Types::Project, null: true
    
    def resolve(attributes:)
      project = Project.create(attributes)
      if !project.valid?
        GraphQL::ExecutionError.new(project.errors.full_messages.join(", "))
      else
        puts project
        {
            created_project: project
        }
      end
    end
  end