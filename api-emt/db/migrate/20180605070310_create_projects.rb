class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name, unique: true
      t.string :description
      t.integer :member_count
      t.timestamps
    end
  end
end
