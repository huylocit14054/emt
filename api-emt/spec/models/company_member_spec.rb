require 'rails_helper'

RSpec.describe CompanyMember, type: :model do
  fixtures :all
  describe 'createStaff' do
    context 'when user email was not in database' do
      let(:attributes) do
        {
          user_email: 'not_exists_in_database@gmail.com',
          roles: [CompanyMember::ROLE_COMPANY_ADMIN],
          company_id: companies(:company_one).id.to_s
        }
      end

      before(:example) do |test|
        CompanyMember.create_staff(attributes) if test.metadata[:need_to_create_staff]
      end

      it 'creates a new user in database' do
        expect { CompanyMember.create_staff(attributes) }.to change { User.count }.by(1)
      end

      it 'creates correct user in database', :need_to_create_staff do
        expect(User.last.email).to eq(attributes[:user_email])
      end

      it 'creates a correct company member in database', :need_to_create_staff do
        expect(CompanyMember.last.user_id).to eq(User.last.id)
        expect(CompanyMember.last.company_id).to eq(companies(:company_one).id)
      end
    end

    context 'when user email was already in database' do
      let(:attributes) do
        {
          user_email: users(:loc).email,
          roles: [CompanyMember::ROLE_COMPANY_MEMBER, CompanyMember::ROLE_COMPANY_ADMIN],
          company_id: companies(:company_two).id.to_s
        }
      end

      before(:example) do |test|
        CompanyMember.create_staff(attributes) if test.metadata[:need_to_create_staff]
      end

      it 'will not create a new user in database' do
        expect { CompanyMember.create_staff(attributes) }.not_to change(User, :count)
      end

      it 'creates new company member' do
        expect { CompanyMember.create_staff(attributes) }.to change { CompanyMember.count }.by(1)
      end
      it 'creates a correct company member in database', :need_to_create_staff do
        expect(CompanyMember.last.company_id).to eq(companies(:company_two).id)
      end
    end
  end
end
