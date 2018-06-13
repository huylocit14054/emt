class Types::MutationType < Types::BaseObject
  # TODO: remove me
  field :test_field, String, null: false,
    description: "An example field added by the generator"
  def test_field
    "Hello World"
  end
  field :login, mutation: Mutations::Login
  field :create_user, mutation: Mutations::CreateUser
  field :update_user, mutation: Mutations::UpdateUser
  field :create_project, mutation: Mutations::CreateProject
  field :update_project, mutation: Mutations::UpdateProject
  field :add_member_to_project, mutation: Mutations::AddMemberToProject
  field :update_member_role_in_project, mutation: Mutations::UpdateMemberRoleInProject
  field :create_dimension, mutation: Mutations::CreateDimension
  field :create_option, mutation: Mutations::CreateOption

end
