class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :due_date, :description, :current_course_id
end
