class Mutations::CreateRule < Mutations::BaseMutation
  argument :attributes, Types::Json, required: true

  field :created_rule, Types::Rule, null: true

  def resolve(attributes:)
    new_rule = Rule.create(attributes)
    if !new_rule.valid?
      GraphQL::ExecutionError.new(new_rule.errors.full_messages.join(', '))
    else
      {
        created_rule: new_rule
      }
    end
  end
end
