class Student < ApplicationRecord
    has_many :grades 
    has_many :current_courses
    has_many :teachers, through: :current_courses
    has_many :teachers, through: :grades

    
    has_secure_password 

    
end
