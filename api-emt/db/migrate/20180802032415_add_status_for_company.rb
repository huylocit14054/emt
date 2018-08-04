class AddStatusForCompany < ActiveRecord::Migration[5.1]
  def change
    add_column :companies, :status, :string, default: Company::STATUS_ACTIVE
  end
end
