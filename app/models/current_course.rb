class CurrentCourse < ApplicationRecord
    has_many :assignments
    belongs_to :teacher 
    has_many :students

    validate :only_one

    def only_one 
        if CurrentCourse.find_by(student_id: student_id, teacher_id: teacher_id)
            errors.add(:student_id, "#{self.student.name} is already enrolled in this course.")
        end
    end


    

end
