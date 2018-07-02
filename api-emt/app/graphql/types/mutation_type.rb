class Types::MutationType < Types::BaseObject
  field :loginUser, mutation: Mutations::Login
  field :create_user, mutation: Mutations::CreateUser
  field :update_user, mutation: Mutations::UpdateUser
  field :create_project, mutation: Mutations::CreateProject
  field :update_project, mutation: Mutations::UpdateProject
  field :add_member_to_project, mutation: Mutations::AddMemberToProject
  field :update_member_role_in_project, mutation: Mutations::UpdateMemberRoleInProject
  field :create_dimension, mutation: Mutations::CreateDimension
  field :update_dimension, mutation: Mutations::UpdateDimension
  field :create_options, mutation: Mutations::CreateOptions
  field :update_password, mutation: Mutations::UpdatePassword
  field :update_avatar, mutation: Mutations::UpdateAvatar
  field :assign_dimensions_for_members, mutation: Mutations::AssignDimensionsForMembers
  field :update_member_assignments, mutation: Mutations::UpdateMemberAssignments
  field :detete_project, mutation: Mutations::DeleteProject
  field :create_rule, mutation: Mutations::CreateRule
  field :update_rule_string, mutation: Mutations::UpdateRuleString
  field :activate_rule, mutation: Mutations::ActivateRule
  field :delete_rule, mutation: Mutations::DeleteRule
  field :generate_utms, mutation: Mutations::GenerateUtms
end
