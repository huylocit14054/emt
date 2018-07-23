class CreatePlanServices < ActiveRecord::Migration[5.1]
  def change
    create_table :plan_services do |t|
      t.references :plan, foreign_key: true
      t.references :service, foreign_key: true
      t.timestamps
    end
    add_index :plan_services, [:plan_id, :service_id], unique: true
  end
end
