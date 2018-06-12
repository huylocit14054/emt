class Types::Authorization < Types::BaseObject
    description "Authorization Type"
    graphql_name "AuthorizationType"

    field :id, ID, null: false
    field :created_at, Types::DateTime, null: false
    field :updated_at, Types::DateTime, null: false

    #Relationships
    field :option_authorizations, [Types::OptionAuthorization], null: false
    field :dimension, Types::Dimension, null: false
    field :project_member, Types::ProjectMember, null: false

end