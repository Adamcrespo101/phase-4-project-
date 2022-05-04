class CreateTeachers < ActiveRecord::Migration[6.1]
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      t.string :subject
      t.string :school
      t.string :thumbnail

      t.timestamps
    end
  end
end
