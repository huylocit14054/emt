require 'rails_helper'

RSpec.describe Plan, type: :model do
  fixtures :all
  describe 'update_plan' do
    it 'update plan name and description' do
      plan = Plan.update_plan(
        plan_id: plans(:plan_one).id,
        name: 'Test',
        description: 'Test',
        service_ids: []
      )
      expect(plan.reload.name).to eq('Test')
      expect(plan.reload.description).to eq('Test')
    end

    it 'dose not change services if the array is empty' do
      expect do
        Plan.update_plan(
          plan_id: plans(:plan_one).id,
          name: 'Test',
          description: 'Test',
          service_ids: []
        )
      end .not_to change { plans(:plan_one).reload.services.count }
    end

    it 'return plan error when update with same name' do
      plan = Plan.update_plan(
        plan_id: plans(:plan_one).id,
        name: 'Standard OMS',
        description: 'Test',
        service_ids: [services(:utm).id.to_s]
      )
      expect(plan.errors).not_to be_empty
    end

    it 'return no plan error when update with same name' do
      plan = Plan.update_plan(
        plan_id: plans(:plan_one).id,
        name: 'Test',
        description: 'Test',
        service_ids: [services(:utm).id.to_s]
      )
      expect(plan.errors).to be_empty
    end

    it 'create new service relationship' do
      plan = Plan.update_plan(
        plan_id: plans(:plan_one).id,
        name: 'Test',
        description: 'Test',
        service_ids: [services(:utm).id.to_s, services(:oms).id.to_s]
      )
      expect(plan.plan_services.count).to eq(2)
    end
  end
end
