class AddIndexToUserAndProject < ActiveRecord::Migration[5.1]
  def change
    add_index :users, :username ,unique: true
    add_index :projects, :name ,unique: true
  end
end
