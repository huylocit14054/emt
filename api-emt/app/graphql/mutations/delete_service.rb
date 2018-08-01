class Mutations::DeleteService < Mutations::BaseMutation
  argument :service_id, ID, required: true

  field :deleted, Boolean, null: false

  def resolve(service_id:)
    Service.find(service_id).destroy
    {
      deleted: true
    }
  end
end
