class Types::User < Types::BaseObject

    field :id, ID, null: false
    field :username, String, null: false
    field :role, String, null: false
    field :created_at, Types::DateTime, null: false
    field :updated_at, Types::DateTime, null: false

    #Relationship
    field :projects, [Types::Project, null: false], null: false
    field :project_relationships, [Types::ProjectMemeber, null: false], null: false

end