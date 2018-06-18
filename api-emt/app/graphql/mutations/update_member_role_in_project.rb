class Mutations::UpdateMemberRoleInProject < Mutations::BaseMutation

    argument :project_member_id, ID, required: true
    argument :role, String, required: true
    
    field :updated, Boolean , null: true

    def resolve(project_member_id:, role:)
      project_member = ProjectMember.find(project_member_id)
      project_member.update_attributes(role: role)
      {
          updated: true
      }
    end
  end