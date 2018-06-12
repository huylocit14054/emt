class Types::QueryType < Types::BaseObject
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  
  field :user, Types::User, null: true, description: "User" do 
    argument :id, ID, required: false
  end
  def user(id:)
    ::User.find(id)
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
end
