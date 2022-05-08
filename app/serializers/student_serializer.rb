class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :degree_type, :username, :password_digest, :date_of_birth, :expected_graduation

  has_many :grades
end
