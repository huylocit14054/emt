require 'rails_helper'

RSpec.describe Company, type: :model do
  fixtures :all

  describe '.company_member_sugestion' do
    let(:company_id) { companies(:company_one).id }
    let(:query) { 'ha' }
    let(:expected_users) { [users(:phat), users(:nhat)] }
    let(:unexpected_user) { users(:khanh) }
    let!(:suggested_users) { Company.company_member_sugestion(company_id: company_id, query: query) }

    it 'return user with correct query' do
      expect(suggested_users).to match_array(expected_users)
    end

    it 'return users have the right access to the utm' do
      suggested_users.each do |user|
        company_member = user.company_members.find_by(company_id: company_id)
        have_role = company_member.roles.join.include?(Service::UTM_SERVICE)
        expect(have_role).to be(true)
      end
    end

    it 'does not return user does note have the right access to the utm' do
      expect(suggested_users).not_to include(unexpected_user)
    end
  end
end
