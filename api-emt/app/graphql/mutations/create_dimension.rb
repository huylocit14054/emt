class Mutations::CreateDimension < Mutations::BaseMutation

    argument :attributes, Types::Json, required: true
    
    field :created_dimension, Types::Dimension, null: true
    
    def resolve(attributes:)
      dimension = Dimension.create(attributes)
      if !dimension.valid?
        GraphQL::ExecutionError.new(dimension.errors.full_messages.join(", "))
      else
        {
            created_dimension: dimension
        }
      end
    end
  end