class Mutations::DeleteProject < Mutations::BaseMutation
  argument :project_id, ID, required: true

  field :deleted, Boolean, null: false

  def resolve(project_id:)
    Project.find(project_id).destroy
    {
      deleted: true,
    }
  end
end
