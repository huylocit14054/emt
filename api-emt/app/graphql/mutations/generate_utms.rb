class Mutations::GenerateUtms < Mutations::BaseMutation
  argument :values, Types::Json, required: true

  field :url_strings, [Types::Utm], null: true

  def resolve(values:)
    url_strings = Utm.generate_utms(values: values, current_user_id: context[:current_user].id)
    {
      url_strings: url_strings
    }
  end
end
