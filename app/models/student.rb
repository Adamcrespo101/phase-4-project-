class Student < ApplicationRecord
    has_many :grades 
    has_many :teachers, through: :grades

    has_secure_password 

    validates :date_of_birth, presence: true 
    validates :date_of_birth, format: { with: /\d{4}\/\d{2}\/\d{2}/, message: "date format must be YYYY/MM/DD"}
    validates :username, length: {is: 10}
    validates :expected_graduation, presence: true
    validates :expected_graduation, format: { with: /\d{4}\/\d{2}\/\d{2}/, message: "date format must be YYYY/MM/DD"}
end
