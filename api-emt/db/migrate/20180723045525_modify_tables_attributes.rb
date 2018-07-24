class ModifyTablesAttributes < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :full_name, :string
    add_column :companies, :phone_number, :string
    add_column :companies, :email, :string
    add_column :companies, :company_member_count, :integer
    remove_index :project_members, name: 'index_project_members_on_user_id'
    rename_index :people, 'project member index', 'index_project_member_user_and_project'
    remove_index :project_members, name: 'index_project_member_user_and_project'
    remove_reference :project_members, :user, foreign_key: true
    add_reference :project_members, :company_member, foreign_key: true
    add_index :project_members, [:project_id, :company_member_id], unique: true
  end
end
