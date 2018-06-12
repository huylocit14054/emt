class Types::QueryType < Types::BaseObject
  # Add root-level fields here.
  # They will be entry points for queries on your schema.


  field :user, Types::User, null: true, description: "User" do 
    argument :id, ID, required: false
  end
  def user(id:)
    ::User.find(id)
  end

  field :project_member, Types::ProjectMember, null: false, description: "Project Member" do
    argument :id, ID, required: false
  end
  def project_member(id:)
    ::ProjectMember.find(id)
  end
  
  field :project, Types::Project, null: false, description: "Project" do
    argument :id, ID, required: false
  end
  def project(id:)
    ::Project.find(id)
  end
  
  field :dimension, Types::Dimension, null: false, description: "Dimension" do
    argument :id, ID, required: false
  end
  def dimension(id:)
    ::Dimension.find(id)
  end

  field :option, Types::Option, null: false, description: "Option" do
    argument :id, ID, required: false
  end
  def option(id:)
    ::Option.find(id)
  end
  
  field :authorization, Types::Authorization, null: false, description: "Authorization" do
    argument :id, ID, required: false
  end
  def authorization(id:)
    ::Authorization.find(id)
  end

  field :option_authorization, Types::OptionAuthorization, null: false, description: "Option Authorization" do
    argument :id, ID, required: false
  end
  def option_authorization(id:)
    ::OptionAuthorization.find(id)
  end

  field :member_suggestion, [Types::User, null: true], null: false do
    argument :query, String, required: true
  end
  def member_suggestion(query:)
    suggestion = ::User.where('username LIKE ? OR email LIKE ?', "%#{query}%", "%#{query}%")
  end

end
