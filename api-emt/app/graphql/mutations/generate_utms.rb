class Mutations::GenerateUtms < Mutations::BaseMutation
  argument :values, Types::Json, required: true

  field :url_strings, [String], null: true

  def resolve(values:)
    url_strings = Utm.generate_utms(values: values)
    {
      url_strings: url_strings
    }
  end
end
