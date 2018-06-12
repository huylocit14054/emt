class Mutations::UpdateProject < Mutations::BaseMutation

    argument :attributes, Types::Json, required: true
    
    field :updated_project, Types::Project, null: true
    
    def resolve(attributes:)
      project = Project.find(attributes["id"])
      is_updated = project.update_attributes(attributes)
      if is_updated
        {
            updated_project: project.reload,
        }
      else
        GraphQL::ExecutionError.new(project.errors.full_messages.join(", "))
      end
    end
  end