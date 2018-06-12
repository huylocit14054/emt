class Types::Project < Types::BaseObject
    description "Project Type"

    field :id, ID, null: false
    field :name, String, null: false
    field :description, String, null: false
    field :member_count, Int, null: false
    field :created_at, Types::DateTime, null: false
    field :updated_at, Types::DateTime, null: false

    #Relationships
    field :dimensions, [Types::Dimension], null: true
    field :members, [Types::User], null: true
    field :member_relationships, [Types::ProjectMember], null: true
end