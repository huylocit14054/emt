class CreateOptions < ActiveRecord::Migration[5.1]
  def change
    create_table :options do |t|
      t.string :name
      t.references :dimension, foreign_key: true
      t.timestamps
    end
    add_index :options, [:name, :dimension_id], unique: true, name: 'option_name'
  end
end
