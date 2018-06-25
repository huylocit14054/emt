class CreateRules < ActiveRecord::Migration[5.1]
  def change
    create_table :rules do |t|
      t.references :project, foreign_key: true
      t.boolean :is_applied, default: false
      t.string :rule_string
      t.timestamps
    end
  end
end
