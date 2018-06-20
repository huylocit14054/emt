class EnhanceUrlTaggingSchema < GraphQL::Schema
  use GraphQL::Guard.new(
    policy_object: GraphqlPolicy,
    not_authorized: ->(type, field) {
      GraphQL::ExecutionError.new("Not authorized to access #{type}.#{field}")
    },
  )

  mutation(Types::MutationType)
  query(Types::QueryType)
end
