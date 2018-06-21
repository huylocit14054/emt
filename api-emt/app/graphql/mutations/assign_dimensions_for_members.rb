class Mutations::AssignDimensionsForMembers < Mutations::BaseMutation
  argument :members, [String], required: true # id of users not members
  argument :project_id, ID, required: true
  argument :choices, [String], required: true # ["1-2", "3-4"]

  field :assigned, Boolean, null: true

  def resolve(members:, project_id:, choices:)
     Project.assign_dimension_for_members(members: members, project_id: project_id, choices: choices)
    {
      assigned: true,
    }
  end
end
