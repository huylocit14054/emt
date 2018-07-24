class CreatePlans < ActiveRecord::Migration[5.1]
  def change
    create_table :plans do |t|
      t.string :name
      t.string :description, default: ''
      t.timestamps
    end
    add_index :plans, :name, unique: true
  end
end
