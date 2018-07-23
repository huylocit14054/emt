class AddReferenceCompanyForProject < ActiveRecord::Migration[5.1]
  def change
    add_reference :projects, :company, foreign_key: true
    remove_index :projects, name: 'index_projects_on_name'
    add_index :projects, [:name, :company_id], unique: true
  end
end
