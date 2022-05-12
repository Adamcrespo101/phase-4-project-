class CreateCurrentCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :current_courses do |t|
      t.string :course_name
      t.integer :student_id
      t.integer :teacher_id

      t.timestamps
    end
  end
end
