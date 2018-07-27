class Mutations::UpdatePassword < Mutations::BaseMutation
  argument :old_password, String, required: true
  argument :new_password, String, required: true

  field :password_is_updated, Boolean, null: false

  def resolve(old_password:, new_password:)
    current_user = context[:current_user]
    # rubocop:disable Style/GuardClause Style/RaiseArgs
    if !current_user || !current_user.authenticate(old_password)
      raise GraphQL::ExecutionError, 'Your old password was incorrect. Please try again.'
    else
      current_user.update(:password, new_password)
    end
    {
      password_is_updated: true
    }
    # rubocop:enable Style/GuardClause Style/RaiseArgs
  end
end
