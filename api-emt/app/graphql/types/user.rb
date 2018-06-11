class Types::User < Types::BaseObject
    description "User Type"
    graphql_name "UserType"

    field :id, ID, null: false
    field :username, String, null: false
    field :role, String, null: false
    field :created_at, Types::DateTime, null: false
    field :updated_at, Types::DateTime, null: false

end