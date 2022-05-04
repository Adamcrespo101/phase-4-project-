class Teacher < ApplicationRecord
    has_many :grades 
    has_many :students, through: :grades

    has_secure_password
end
