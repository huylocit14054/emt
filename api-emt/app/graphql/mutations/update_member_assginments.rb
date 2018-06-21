class Mutations::AssignDimensionsForMembers < Mutations::BaseMutation
    argument :members, ID, required: true # id of project members
    argument :new_assignments, [String], required: true # ["1-2", "3-4"]
  
    field :updated, Boolean, null: true
  
    def resolve(members:, new_assignment: )
       Project.update_member_assignments(members: members, new_assignment: new_assignment)
      {
        updated: true,
      }
    end
  end
  