class User < ApplicationRecord
    has_many :project_relationships, class_name: "ProjectMember" , foreign_key: "user_id"
    has_many :projects, through: :project_relationships

    has_secure_password
end
