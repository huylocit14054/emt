class Types::Dimension < Types::BaseObject
    description "Dimension Type"
    graphql_name "DimensionType"

    field :id, ID, null: false
    field :name, String, null: false
    field :category, String, null: false
    field :created_at, Types::DateTime, null: false
    field :updated_at, Types::DateTime, null: false

    #Relationship
    field :project, Types::Project, null:false
    field :authorizations, [Types::Authorization], null: false
    field :options, [Types::Option], null: false

end