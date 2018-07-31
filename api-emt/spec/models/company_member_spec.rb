require 'rails_helper'

RSpec.describe CompanyMember, type: :model do
  fixtures :all
  describe 'createStaff' do
    context 'when user email was not in database' do
      let(:attributes) do
        {
          user_email: 'not_exists_in_database@gmail.com',
          roles: [CompanyMember::ROLE_COMPANY_MEMBER, CompanyMember::ROLE_COMPANY_ADMIN],
          company_id: companies(:company_one).id.to_s
        }
      end
      it 'create a new user in database' do
        expect { CompanyMember.create_staff(attributes) }.to change { User.count }.by(1)
      end
    end

    context 'when user email was already in database' do
      let(:attributes) do
        {
          user_email: users(:loc).email,
          roles: [CompanyMember::ROLE_COMPANY_MEMBER, CompanyMember::ROLE_COMPANY_ADMIN],
          company_id: companies(:company_one).id.to_s
        }
      end
      it 'will not create a new user in database' do
        expect { CompanyMember.create_staff(attributes) }.not_to change(User, :count)
      end
    end
  end
end
