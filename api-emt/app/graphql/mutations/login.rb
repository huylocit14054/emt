class Mutations::Login < Mutations::BaseMutation
  # input
  argument :username, String, required: true
  argument :password, String, required: true

  # payload
  field :token, String, null: true
  field :user, Types::User, null: true

  def resolve(username:, password:)
    user = User.find_by(username: username) || User.find_by(email: username)
    raise GraphQL::ExecutionError, 'Invalid Username/Password' if !user || !user.authenticate(password)
    {
      token: AuthToken.token(user_id: user.id),
      user: user
    }
  end
end
