class Mutations::UpdateDimension < Mutations::BaseMutation

    argument :attributes, Types::Json, required: true
    
    field :updated_dimension, Types::Dimension, null: true
    
    def resolve(attributes:)
      dimension = Dimension.find(attributes["id"])
      is_updated = dimension.update_attributes(attributes)
      if is_updated
        {
            updated_dimension: dimension.reload,
        }
      else
        GraphQL::ExecutionError.new(dimension.errors.full_messages.join(", "))
      end
    end
  end