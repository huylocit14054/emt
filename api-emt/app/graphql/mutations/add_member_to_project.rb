class Mutations::AddMemberToProject < Mutations::BaseMutation
  argument :username, String, required: true
  argument :project_id, Integer, required: true
  argument :role, String, required: true

  field :added_member, Types::ProjectMember, null: true

  def resolve(username:, project_id:, role:)
    user = User.find_by(username: username) || User.find_by(email: username)
    #check whether user exist
    if !user
      GraphQL::ExecutionError.new("No user named #{username}.")
      #check whether project already has the user
    elsif ProjectMember.exists?(user: user, project_id: project_id)
      GraphQL::ExecutionError.new("#{username} already has access.")
      #create relationship
    else
      project_member = ProjectMember.create(user: user, project_id: project_id, role: role)
      {
        added_member: project_member,
      }
    end
  end
end
