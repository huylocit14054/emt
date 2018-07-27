class Mutations::AssignDimensionsForMembers < Mutations::BaseMutation
  argument :company_members, [String], required: true
  argument :project_id, ID, required: true
  argument :choices, [String], required: true # ["1-2", "3-4"]

  field :assigned, Boolean, null: true

  def resolve(company_members:, project_id:, choices:)
    Project.assign_dimension_for_members(company_members: company_members, project_id: project_id, choices: choices)
    {
      assigned: true
    }
  end
end
