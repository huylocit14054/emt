class AddDefaultValueForCompanies < ActiveRecord::Migration[5.1]
  def change
    change_column :companies, :logo, :string, default: 'company_logo_lyrgzi.png'
  end
end
