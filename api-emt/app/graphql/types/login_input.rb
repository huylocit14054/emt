class Types::LoginInput < Types::BaseInputObject
    argument :username, String, required: true
    argument :password, String, required: true
end