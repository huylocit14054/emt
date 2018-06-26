class CreateRules < ActiveRecord::Migration[5.1]
  def change
    if ActiveRecord::Base.connection.table_exists? 'rules'
      drop_table :rules do |t|
        t.string :name
      end
    end
    create_table :rules do |t|
      t.string :rule_string
      t.boolean :is_applied, default: false
      t.references :project, foreign_key: true
      t.timestamps
    end
    add_index :rules, [:rule_string, :project_id], unique: true, name: 'rule_string_key'
  end
end
