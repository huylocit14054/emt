class Types::Rule < Types::BaseObject
  description 'Rule Type'

  field :id, ID, null: false
  field :rule_string, String, null: false
  field :is_applied, Boolean, null: false
  field :created_at, Types::DateTime, null: false
  field :updated_at, Types::DateTime, null: false
  field :rule_string_to_display, String, null: false
  def rule_string_to_display
    object.display_name
  end
  # Relationship
  field :project, Types::Project, null: false
end
