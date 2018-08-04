class ChangeDefaultValueForRolesInCompanyMember < ActiveRecord::Migration[5.1]
  def change
    change_column :company_members, :roles, :string, array: true, default: ['staff']
  end
end
