class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :subject, :school, :thumbnail
end
