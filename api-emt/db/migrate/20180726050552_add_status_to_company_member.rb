class AddStatusToCompanyMember < ActiveRecord::Migration[5.1]
  def change
    add_column :company_members, :status, :string, default: 'active'
  end
end
