class Mutations::UpdateCompany < Mutations::BaseMutation
  argument :attributes, Types::Json, required: true

  field :updated_company, Types::Company, null: true

  def resolve(attributes:)
    company = Company.find(attributes['id'])
    is_updated = company.update(attributes)
    if is_updated
      {
        updated_company: company.reload
      }
    else
      GraphQL::ExecutionError.new(company.errors.full_messages.join(', '))
    end
  end
end
