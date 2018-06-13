class Types::Option < Types::BaseObject
    description "Option Type"
    graphql_name "OptionType"

    field :id, ID, null: false
    field :name, String, null: false
    field :created_at, Types::DateTime, null: false
    field :updated_at, Types::DateTime, null: false

    #Relationships
    field :dimension, Types::Dimension, null: false
    field :option_authorizations, [Types::OptionAuthorization], null: false

end