class CreateAuthorizations < ActiveRecord::Migration[5.1]
  def change
    create_table :authorizations do |t|
      t.references :project_member , foreign_key: true
      t.references :dimension , foreign_key: true
      t.timestamps
    end
    add_index :authorizations , [:project_member_id , :dimension_id] ,unique: true , name: "authorization_key"
  end
end
