
class AuthToken
    def self.key
      Rails.application.secrets.secret_key_base
    end
  
    def self.token(user_id:)
      payload = {user_id: user_id}
      JsonWebToken.sign(payload, key: key)
    end
  
    def self.verify(token)
      result = JsonWebToken.verify(token, key: key)
      puts result
      raise GraphQL::ExecutionError.new("User Not Authenticated!") if result[:error]
      result = result[:ok]
      user_id = result[:user_id]  
      User.find(user_id)
    end
end
