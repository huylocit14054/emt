class Mutations::UpdateRuleString < Mutations::BaseMutation
  argument :attributes, Types::Json, required: true

  field :updated_rule, Types::Rule, null: true

  def resolve(attributes:)
    rule = Rule.find(attributes['id'])
    is_updated = rule.update(attributes)
    if is_updated
      {
        updated_rule: rule.reload
      }
    else
      GraphQL::ExecutionError.new(rule.errors.full_messages.join(', '))
    end
  end
end
