class Project < ApplicationRecord
    has_many :member_relationships , class_name: "ProjectMember", foreign_key: "project_id"
    has_many :members, through: :member_relationships , source: :user
    has_many :dimensions
    validates :name, length: {minimum: 3}, allow_blank: true, uniqueness: true
end
