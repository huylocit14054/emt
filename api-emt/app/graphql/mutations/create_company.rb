class Mutations::CreateCompany < Mutations::BaseMutation
  argument :name, String, required: true
  argument :company_admin_email, String, required: true
  argument :plan_id, ID, required: true

  field :created_company, Types::Company, null: true

  def resolve(name:, company_admin_email:, plan_id:)
    # Create company with entered name and plan
    company = Company.create!(name: name, plan_id: plan_id)
    {
      created_company: company
    }
  end
end
