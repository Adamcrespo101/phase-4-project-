class AddCourseToStudents < ActiveRecord::Migration[6.1]
  def change
    add_column :students, :current_course_id, :integer 
  end
end
