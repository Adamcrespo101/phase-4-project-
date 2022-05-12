class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :due_date, :description, :current_course_id

  belongs_to :current_course


end
