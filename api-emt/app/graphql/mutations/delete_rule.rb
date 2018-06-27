class Mutations::DeleteRule < Mutations::BaseMutation
  argument :rule_id, ID, required: true

  field :deleted, Boolean, null: true

  def resolve(rule_id:)
    Rule.find(rule_id).destroy
    {
      deleted: true
    }
  end
end
