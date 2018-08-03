class ChangeDefaultValueForStatusInCompanyMemberAndUser < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :status, :string, default: 'active'
    change_column :company_members, :status, :string, default: 'pending'
  end
end
