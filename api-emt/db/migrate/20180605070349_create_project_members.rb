class CreateProjectMembers < ActiveRecord::Migration[5.1]
  def change
    create_table :project_members do |t|
      t.timestamps

      t.references :user, foreign_key: true
      t.references :project, foreign_key: true
    end
    add_index :project_members , [:user_id,:project_id], unique: true, name: "project member index"
  end
end
