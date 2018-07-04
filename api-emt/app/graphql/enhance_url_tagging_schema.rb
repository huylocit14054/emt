class EnhanceUrlTaggingSchema < GraphQL::Schema
  use GraphQL::Guard.new(
    policy_object: GraphqlPolicy,
    not_authorized: lambda { |type, _field|
      GraphQL::ExecutionError.new("You are not authorized to access this #{type}")
    }
  )

  mutation(Types::MutationType)
  query(Types::QueryType)
end
