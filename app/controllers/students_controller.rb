class StudentsController < ApplicationController

    def index
        render json: Student.all, status: :ok
    end 

    def create 
        student = Student.create!(student_params)
        if student.valid?
            session[:student_id] = student.id
            render json: student, status: :created
        else
            render json: student.errors.full_messages, status: 422
        end
    end

    def show 
        if params[:id] #if we have /:id we are getting any user 
            student = Student.find(params[:id])
            render json: student 
        end
        #if we dont have /:id we are authenticating a logged in user 
        student = Student.find_by(id: session[:student_id])
        if student
            render json: student, status: :ok
        else
            render json: {error: "student not found"}, status: 401
        end
    end

    def find 
        student = Student.find_by(id: params[:id])
        render json: student
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
        params.permit(:username, :password)
    end

end
