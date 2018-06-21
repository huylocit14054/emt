require "rails_helper"

describe User, :type => :model do
    it "should create successfully" do
        post = User.create!(:username => 'username', :password => 'password')
        expect(post).to be_instance_of(User)
    end

    it "could not create with invalid params" do
        expect { User.create! }.to raise_error("Validation failed: Password can't be blank")
    end
end