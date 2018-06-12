class Mutations::CreateUser < Mutations::BaseMutation

    argument :attributes, Types::Json, required: true
    
    field :created_user, Types::User, null: true
    
    def resolve(attributes:)
      user = User.create(attributes)
      if !user.valid?
        GraphQL::ExecutionError.new(user.errors.full_messages.join(", "))
      else
        puts user
        {
            created_user: user
        }
      end
    end
  end