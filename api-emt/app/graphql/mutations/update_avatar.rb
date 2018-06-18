class Mutations::UpdateAvatar < Mutations::BaseMutation
  argument :avatar, ApolloUploadServer::Upload, required: true

  field :avatar_url, String, null: true

  def resolve(avatar:)
    data = Cloudinary::Uploader.upload(avatar)
    public_id = data["public_id"]
    User.find(context[:current_user].id).update_attribute(:avatar, public_id)
    {
      avatar_url: public_id,
    }
  end
end
