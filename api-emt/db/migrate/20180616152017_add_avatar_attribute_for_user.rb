class AddAvatarAttributeForUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :avatar, :string, default: "default-avatar_wbcfln.png"
  end
end
