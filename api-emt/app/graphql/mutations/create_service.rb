class Mutations::CreateService < Mutations::BaseMutation
  argument :attributes, Types::Json, required: true

  field :created_service, Types::Service, null: true

  def resolve(attributes:)
    new_service = Service.create(attributes)
    if !new_service.valid?
      GraphQL::ExecutionError.new(new_service.errors.full_messages.join(', '))
    else
      {
        created_service: new_service
      }
    end
  end
end
