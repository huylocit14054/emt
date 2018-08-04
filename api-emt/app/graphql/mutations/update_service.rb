class Mutations::UpdateService < Mutations::BaseMutation
  argument :attributes, Types::Json, required: true

  field :updated_service, Types::Service, null: true

  def resolve(attributes:)
    service = Service.find(attributes['id'])
    is_updated = service.update(attributes)
    if is_updated
      {
        updated_service: service.reload
      }
    else
      GraphQL::ExecutionError.new(service.errors.full_messages.join(', '))
    end
  end
end
