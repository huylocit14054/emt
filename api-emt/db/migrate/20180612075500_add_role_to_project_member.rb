class AddRoleToProjectMember < ActiveRecord::Migration[5.1]
  def change
    add_column :project_members, :role, :string
  end
end
