class CreateOptionAuthorizations < ActiveRecord::Migration[5.1]
  def change
    create_table :option_authorizations do |t|
      t.references :authorization , foreign_key: true
      t.references :option , foreign_key: true
      t.timestamps
    end
    add_index :option_authorizations , [:authorization_id, :option_id] , unique: true, name: "multiple_choice_authorization_option"
  end
end
