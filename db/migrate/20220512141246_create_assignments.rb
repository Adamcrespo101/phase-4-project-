class CreateAssignments < ActiveRecord::Migration[6.1]
  def change
    create_table :assignments do |t|
      t.string :name
      t.datetime :due_date
      t.string :description
      t.integer :current_course_id

      t.timestamps
    end
  end
end
