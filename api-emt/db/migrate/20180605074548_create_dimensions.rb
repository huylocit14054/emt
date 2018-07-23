class CreateDimensions < ActiveRecord::Migration[5.1]
  def change
    create_table :dimensions do |t|
      t.string :name
      t.string :type
      t.references :project, foreign_key: true
      t.timestamps
    end
    add_index :dimensions, [:name, :project_id], unique: true, name: 'dimention_name'
  end
end
