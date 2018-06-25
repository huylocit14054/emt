class CreateRuleFields < ActiveRecord::Migration[5.1]
  def change
    create_table :rule_fields do |t|
      t.string :name
      t.references :dimension, foreign_key: true
      t.references :rule, foreign_key: true
      t.timestamps
    end
    add_index :rule_fields, [:rule_id, :name], unique: true, name: 'rule_field_name_key'
    add_index :rule_fields, [:rule_id, :dimension_id], unique: true, name: 'rule_field_dimension_key'
  end
end
