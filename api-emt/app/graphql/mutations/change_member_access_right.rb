class Mutations::ChangeMemberAccessRight < Mutations::BaseMutation
  argument :attributes, Types::Json, required: true

  field :updated_access_right, Types::ProjectMember, null: true

  # attributes['allow'] includes 'allowed' or 'restricted'
  def resolve(attributes:)
    project_member = ProjectMember.find(attributes['id'])
    is_updated = project_member.update(attributes)
    if is_updated
      {
        updated_access_right: project_member.reload
      }
    else
      GraphQL::ExecutionError.new(project_member.errors.full_messages.join(', '))
    end
  end
end
