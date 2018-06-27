class Mutations::ActivateRule < Mutations::BaseMutation
  argument :rule_id, ID, required: true

  field :activated, Boolean, null: true

  def resolve(rule_id:)
    rule = Rule.find(rule_id)
    is_activated = rule.activate_rule
    if is_activated
      {
        activated: true
      }
    else
      GraphQL::ExecutionError.new(rule.errors.full_messages.join(', '))
    end
  end
end
