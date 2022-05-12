# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'SENDING STUDENTS AND TEACHERS TO SCHOOL, GRADING EXAMS NOW' 

Teacher.create(name: Faker::Name.name, username: "teacher1", password_digest: "pass", subject: "Biology", school: "Mars University", thumbnail: "https://s18670.pcdn.co/wp-content/uploads/confident.jpg")
Teacher.create(name: Faker::Name.name, username: "teacher2", password_digest: "pass", subject: "Calculus", school: "Pennbrook University", thumbnail: "https://www.crushpixel.com/big-static7/preview4/woman-teacher-67356.jpg")
Teacher.create(name: Faker::Name.name, username: "teacher3", password_digest: "pass", subject: "History", school: "Barnett College", thumbnail: "https://t4.ftcdn.net/jpg/01/13/31/65/360_F_113316547_q9wiDxadvidz5UvKITGbJMvzqrDw45Kl.jpg")

30.times do
Student.create(name: Faker::Name.name, username: Faker::IDNumber.chilean_id, degree_type: Faker::Educator.degree, password_digest: "pass", date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 65), expected_graduation: Faker::Date.between(from: Date.today, to: 3.years.from_now))
end

#teacher 1 biology
Grade.create(teacher_id: 1, student_id: 1, result: rand(65..100), course_name: "Biology 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 1, student_id: 2, result: rand(65..100), course_name: "Biology 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 1, student_id: 3, result: rand(65..100), course_name: "Biology 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 1, student_id: 4, result: rand(65..100), course_name: "Biology 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 1, student_id: 5, result: rand(65..100), course_name: "Biology 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 1, student_id: 6, result: rand(65..100), course_name: "Biology 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 1, student_id: 7, result: rand(65..100), course_name: "Biology 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 1, student_id: 8, result: rand(65..100), course_name: "Biology 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 1, student_id: 9, result: rand(65..100), course_name: "Biology 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 1, student_id: 10, result: rand(65..100), course_name: "Biology 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")


#teacher 2 Calculus 

Grade.create(teacher_id: 2, student_id: 11, result: rand(65..100), course_name: "Calculus 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 2, student_id: 12, result: rand(65..100), course_name: "Calculus 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 2, student_id: 13, result: rand(65..100), course_name: "Calculus 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 2, student_id: 14, result: rand(65..100), course_name: "Calculus 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 2, student_id: 15, result: rand(65..100), course_name: "Calculus 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 2, student_id: 16, result: rand(65..100), course_name: "Calculus 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 2, student_id: 17, result: rand(65..100), course_name: "Calculus 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 2, student_id: 18, result: rand(65..100), course_name: "Calculus 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 2, student_id: 19, result: rand(65..100), course_name: "Calculus 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 2, student_id: 20, result: rand(65..100), course_name: "Calculus 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")

#teacher 3 history
Grade.create(teacher_id: 3, student_id: 21, result: rand(65..100), course_name: "History 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 3, student_id: 22, result: rand(65..100), course_name: "History 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 3, student_id: 23, result: rand(65..100), course_name: "History 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 3, student_id: 24, result: rand(65..100), course_name: "History 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 3, student_id: 25, result: rand(65..100), course_name: "History 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 3, student_id: 26, result: rand(65..100), course_name: "History 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 3, student_id: 27, result: rand(65..100), course_name: "History 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 3, student_id: 28, result: rand(65..100), course_name: "History 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 3, student_id: 29, result: rand(65..100), course_name: "History 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: 3, student_id: 30, result: rand(65..100), course_name: "History 101", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")

Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
Grade.create(teacher_id: rand(1..3), student_id: rand(1..30), result: rand(65..100), course_name: Faker::Educator.course_name, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
   #10 
CurrentCourse.create(course_name: "Underwater Basket Weaving 101", teacher_id: 1, student_id: 1)
CurrentCourse.create(course_name: "Aging, Things, and Espionage in the World 102", teacher_id: 1, student_id: 2)
CurrentCourse.create(course_name: "Landscapes, Pilgrimage, and Beowulf 302", teacher_id: 1, student_id: 3)

CurrentCourse.create(course_name: "Pirates and Decision-Making in Molecular Biology", teacher_id: 2, student_id: 1)
CurrentCourse.create(course_name: "Issues and Choreography in Applied Mathematics", teacher_id: 2, student_id: 2)
CurrentCourse.create(course_name: "Death, Television and Conquest", teacher_id: 2, student_id: 3)

CurrentCourse.create(course_name: "Machines, Gravity, and Mobility in Modern Poetry and Fiction", teacher_id: 3, student_id: 1)
CurrentCourse.create(course_name: "Construction and Drugs in Climate and Energy", teacher_id: 3, student_id: 2)
CurrentCourse.create(course_name: "Hydrology and Entrepreneurship in American History", teacher_id: 3, student_id: 3)
#Teacher 1s courses:
Assignment.create(name: "Essay", due_date: DateTime.new(2022,5,10), description: "blah blah blah just write some stuff", current_course_id: 1)
Assignment.create(name: "Worksheet", due_date: DateTime.new(2022,5,11), description: "blah blah blah just write some stuff", current_course_id: 1)
Assignment.create(name: "More homework", due_date: DateTime.new(2022,5,12), description: "blah blah blah just write some stuff", current_course_id: 1)
Assignment.create(name: "Essay", due_date: DateTime.new(2022,5,10), description: "blah blah blah just write some stuff", current_course_id: 2)
Assignment.create(name: "Worksheet", due_date: DateTime.new(2022,5,11), description: "blah blah blah just write some stuff", current_course_id: 2)
Assignment.create(name: "More homework", due_date: DateTime.new(2022,5,12), description: "blah blah blah just write some stuff", current_course_id: 2)
Assignment.create(name: "Essay", due_date: DateTime.new(2022,5,10), description: "blah blah blah just write some stuff", current_course_id: 3)
Assignment.create(name: "Worksheet", due_date: DateTime.new(2022,5,11), description: "blah blah blah just write some stuff", current_course_id: 3)
Assignment.create(name: "More homework", due_date: DateTime.new(2022,5,12), description: "blah blah blah just write some stuff", current_course_id: 3)

#Teacher 2s courses:
Assignment.create(name: "Essay", due_date: DateTime.new(2022,5,10), description: "blah blah blah just write some stuff", current_course_id: 4)
Assignment.create(name: "Worksheet", due_date: DateTime.new(2022,5,11), description: "blah blah blah just write some stuff", current_course_id: 4)
Assignment.create(name: "More homework", due_date: DateTime.new(2022,5,12), description: "blah blah blah just write some stuff", current_course_id: 4)
Assignment.create(name: "Essay", due_date: DateTime.new(2022,5,10), description: "blah blah blah just write some stuff", current_course_id: 5)
Assignment.create(name: "Worksheet", due_date: DateTime.new(2022,5,11), description: "blah blah blah just write some stuff", current_course_id: 5)
Assignment.create(name: "More homework", due_date: DateTime.new(2022,5,12), description: "blah blah blah just write some stuff", current_course_id: 5)
Assignment.create(name: "Essay", due_date: DateTime.new(2022,5,10), description: "blah blah blah just write some stuff", current_course_id: 6)
Assignment.create(name: "Worksheet", due_date: DateTime.new(2022,5,11), description: "blah blah blah just write some stuff", current_course_id: 6)
Assignment.create(name: "More homework", due_date: DateTime.new(2022,5,12), description: "blah blah blah just write some stuff", current_course_id: 6)

#Teacher 3s courses: 
Assignment.create(name: "Essay", due_date: DateTime.new(2022,5,10), description: "blah blah blah just write some stuff", current_course_id: 7)
Assignment.create(name: "Worksheet", due_date: DateTime.new(2022,5,11), description: "blah blah blah just write some stuff", current_course_id: 7)
Assignment.create(name: "More homework", due_date: DateTime.new(2022,5,12), description: "blah blah blah just write some stuff", current_course_id: 7)
Assignment.create(name: "Essay", due_date: DateTime.new(2022,5,10), description: "blah blah blah just write some stuff", current_course_id: 8)
Assignment.create(name: "Worksheet", due_date: DateTime.new(2022,5,11), description: "blah blah blah just write some stuff", current_course_id: 8)
Assignment.create(name: "More homework", due_date: DateTime.new(2022,5,12), description: "blah blah blah just write some stuff", current_course_id: 8)
Assignment.create(name: "Essay", due_date: DateTime.new(2022,5,10), description: "blah blah blah just write some stuff", current_course_id: 9)
Assignment.create(name: "Worksheet", due_date: DateTime.new(2022,5,11), description: "blah blah blah just write some stuff", current_course_id: 9)
Assignment.create(name: "More homework", due_date: DateTime.new(2022,5,12), description: "blah blah blah just write some stuff", current_course_id: 9)


