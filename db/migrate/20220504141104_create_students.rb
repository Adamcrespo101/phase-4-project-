class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.string :name
      t.string :degree_type
      t.string :username
      t.string :password_digest
      t.string :date_of_birth
      t.string :expected_graduation

      t.timestamps
    end
  end
end
