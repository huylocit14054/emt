class Mutations::CreateCompany < Mutations::BaseMutation
  argument :name, String, required: true
  argument :company_admin_email, String, required: true
  argument :plan_id, ID, required: true

  field :created_company, Types::Company, null: true

  def resolve(name:, company_admin_email:, plan_id:)
    company = nil
    ActiveRecord::Base.transaction do
      # Create company with entered name and plan
      company = Company.create!(name: name, plan_id: plan_id)

      # Create new company staff
      roles = [CompanyMember::ROLE_COMPANY_ADMIN]
      CompanyMember.create_staff(company_id: company.id, user_email: company_admin_email, roles: roles)
    end
    {
      created_company: company.reload
    }
  end
end
