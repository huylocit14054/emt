class CreateCompanyMembers < ActiveRecord::Migration[5.1]
  def change
    create_table :company_members do |t|
      t.references :company, foreign_key: true
      t.references :user, foreign_key: true
      t.string :roles, array: true, default: []
      t.timestamps
    end
    add_index :company_members, [:company_id, :user_id], unique: true
  end
end
