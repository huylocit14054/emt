class CreateUtms < ActiveRecord::Migration[5.1]
  def change
    create_table :utms do |t|
      t.references :project_member, foreign_key: true
      t.string :url
      t.timestamps
    end
  end
end
