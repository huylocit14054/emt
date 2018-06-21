class Mutations::UpdateMemberAssignments < Mutations::BaseMutation
    argument :member_id, ID, required: true # id of project member
    argument :new_assignments, [String], required: true # ["1-2", "3-4"]
  
    field :updated, Boolean, null: true
  
    def resolve(member_id:, new_assignments: )
       Project.update_member_assignments(member_id: member_id, new_assignments: new_assignments)
      {
        updated: true,
      }
    end
  end
  