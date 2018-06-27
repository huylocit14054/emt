class Mutations::DeleteRule < Mutations::BaseMutation
  argument :rule_id, ID, required: true

  field :deleted, Boolean, null: true

  def resolve(rule_id:)
    rule = Rule.find(rule_id)
    if rule.is_applied
      {
        deleted: false
      }
    else
      rule.destroy
      {
        deleted: true
      }
    end
  end
end
