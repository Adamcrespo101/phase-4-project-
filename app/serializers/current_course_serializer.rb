class CurrentCourseSerializer < ActiveModel::Serializer
  attributes :id, :course_name, :student_id, :teacher_id
end
