class Mutations::UpdateUser < Mutations::BaseMutation
  argument :attributes, Types::Json, required: true

  field :updated_user, Types::User, null: true

  def resolve(attributes:)
    user = User.find(attributes['id'])
    is_updated = user.update(attributes)
    if is_updated
      {
        updated_user: user.reload
      }
    else
      GraphQL::ExecutionError.new(user.errors.full_messages.join(', '))
    end
  end
end
