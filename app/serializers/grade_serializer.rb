class GradeSerializer < ActiveModel::Serializer
  attributes :id, :result, :course_name, :feedback, :teacher_id, :student_id
end
