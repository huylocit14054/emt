class Mutations::CreateRule < Mutations::BaseMutation
  argument :attributes, Types::Json, required: true

  field :created_utm, Types::Utm, null: true

  def resolve(attributes:)
    new_utm = Utm.generate_url(values: attributes)
    if !new_utm.valid?
      GraphQL::ExecutionError.new(new_utm.errors.full_messages.join(', '))
    else
      {
        created_utm: new_utm
      }
    end
  end
end
