class CreateGrades < ActiveRecord::Migration[6.1]
  def change
    create_table :grades do |t|
      t.integer :result
      t.string :course_name
      t.string :feedback
      t.integer :teacher_id
      t.integer :student_id

      t.timestamps
    end
  end
end
