class StudentsController < ApplicationController

    def index
        render json: Student.all, status: :ok
    end 

    def create 
        student = Student.create(student_params)
        if student.valid?
            session[:student_id] = student.id
            render json: student, status: :created
        else
            render json: student.errors.full_messages, status: 422
        end
    end

    def show 
        student = Student.find_by(id: params[:id])
        if student 
            render json: student, status: :ok
        else
            render json: {error: "student not found"}, status: 404
        end
    end

    def destroy
        student = Student.find_by(id: params[:id])
        if student 
            student.destroy 
            head :no_content
        else
            render json: {error: "student not found"}, status: 404
        end
    end

    private

    def student_params 
        params.permit(:name, :username, :password_digest, :email)
    end

end
