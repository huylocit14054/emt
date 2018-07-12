require 'rails_helper'

RSpec.describe EnhanceUrlTaggingSchema do
  fixtures :all
  let(:context) { { current_user: users(:loc) } }
  let(:variables) { {} }
  # Call `result` to execute the query
  let(:result) do
    res = EnhanceUrlTaggingSchema.execute(
      query_string,
      context: context,
      variables: variables
    )
    # Print any errors
    # pp res if res['errors']
    res
  end

  describe 'login' do
    let(:query_string) do
      %|
        mutation($username: String!, $password: String!){
          loginUser(input:{username: $username, password: $password}){
            token
            user{
              username
            }
          }
        }
      |
    end

    let(:return_error) do
      message = ''
      result['errors'].each { |e| message += e['message'] }
      message
    end
    let(:error) { 'Invalid Username/Password' }
    let(:return_result) {result['data']['loginUser']}
    context 'when input wrong user name' do
      let(:variables) do
        {
          'username' => 'lot',
          'password' => ''
        }
      end
      it 'raise error' do
        expect(return_error).to eq(error)
      end
    end

    before(:example) do
      users(:loc).update(username: 'locusername',password: '123456')
    end
    context 'when input wrong password' do
      let(:variables) do
        {
          'username' => users(:loc).username,
          'password' => '123457'
        }
      end
      it 'raise error' do
        expect(return_error).to eq(error)
      end
    end

    context 'when input correct password' do
      let(:variables) do
        {
          'username' => users(:loc).username,
          'password' => '123456'
        }
      end
      it 'return the correct user' do
        expect(return_result['token']).not_to be_nil
        expect(return_result['user']['username']).to eq(users(:loc).username)
      end
    end
  end
end
