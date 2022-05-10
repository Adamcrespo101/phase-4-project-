class StudentSessionsController < ApplicationController

    def create 
        student = Student.find_by(username: params[:username])
        if student&.authenticate(params[:password])
            session[:student_id] = student.id
            render json: student, status: :created
        else
            render json: { error: {login: "Invalid username or password"}, status: :unauthorized }
        end
    end

    def destroy 
        session.delete :teacher_id
        session.delete :student_id
    end

    def current_user 
    student = Student.find_by(id: session[:student_id])
    end

end
