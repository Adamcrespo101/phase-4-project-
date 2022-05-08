class AddEmailToTeachers < ActiveRecord::Migration[6.1]
  def change
    add_column :teachers, :email, :string
  end
end
