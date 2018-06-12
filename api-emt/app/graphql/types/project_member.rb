class Types::ProjectMember < Types::BaseObject
    description "Project Member Type"
    graphql_name "ProjectMemberType"

    field :id, ID, null: false
    field :created_at, Types::DateTime, null: false
    field :updated_at, Types::DateTime, null: false

    #Relationships
    field :project, Types::Project, null: false
    field :user, Types::User, null: false
    field :authorizations, [Types::Authorization], null: false
    field :dimensions, [Types::Dimension], null: false
end