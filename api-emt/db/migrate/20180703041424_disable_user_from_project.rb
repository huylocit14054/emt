class DisableUserFromProject < ActiveRecord::Migration[5.1]
  def change
    add_column :project_members, :status, :string, default: 'active'
  end
end
