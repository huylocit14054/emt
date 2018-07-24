class EditServiceAttribute < ActiveRecord::Migration[5.1]
  def change
    rename_column :services, :discription, :description
  end
end
