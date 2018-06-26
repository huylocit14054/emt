class ChangeIsAppliedBooleanInRule < ActiveRecord::Migration[5.1]
  def change
    change_column :rules, :is_applied, :boolean, default: true
  end
end
