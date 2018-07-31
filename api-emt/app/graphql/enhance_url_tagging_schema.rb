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

GraphQL::Errors.configure(EnhanceUrlTaggingSchema) do
  rescue_from ActiveRecord::RecordNotFound do |_exception|
    nil
  end

  rescue_from ActiveRecord::RecordInvalid do |exception|
    GraphQL::ExecutionError.new(exception.record.errors.full_messages.join(", "))
  end

  # rescue_from StandardError do |_exception|
  #   GraphQL::ExecutionError.new('Please try to execute the query for this field later')
  # end

  # rescue_from CustomError do |exception, object, arguments, context|
  #   error = GraphQL::ExecutionError.new("Error found!")
  #   firstError.path = context.path + ["myError"]
  #   context.add_error(firstError)
  # end
end
