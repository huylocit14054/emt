class Types::Project < Types::BaseObject
  description 'Project Type'

  field :id, ID, null: false
  field :name, String, null: false
  field :description, String, null: false
  field :member_count, Int, null: false
  field :created_at, Types::DateTime, null: false
  field :updated_at, Types::DateTime, null: false

  # Relationships
  field :dimensions, [Types::Dimension], null: true
  field :members, [Types::User], null: true
  field :shorten_members, [Types::User], null: true
  field :company, [Types::Company], null: false

  def shorten_members
    object.members.sample(5)
  end

  field :member_relationships, [Types::ProjectMember], null: true
  field :is_managed_by_current_user, Boolean, null: true

  def is_managed_by_current_user
    ::ProjectMember.exists?(user: context[:current_user], project: object, role: 'project_admin')
  end
end
