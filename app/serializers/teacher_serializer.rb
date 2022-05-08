class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :subject, :school, :thumbnail
  has_many :students 
  has_many :grades
end
