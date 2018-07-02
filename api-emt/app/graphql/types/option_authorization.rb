class Types::OptionAuthorization < Types::BaseObject
  description 'Option Authorization Type'

  field :id, ID, null: false
  field :created_at, Types::DateTime, null: false
  field :updated_at, Types::DateTime, null: false

  # Relationships
  field :option, Types::Option, null: false
  field :authorization, Types::Authorization, null: false
end
