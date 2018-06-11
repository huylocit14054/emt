class RenameColumnTypeInDimension < ActiveRecord::Migration[5.1]
  def change
    rename_column :dimensions, :type , :category
  end
end
