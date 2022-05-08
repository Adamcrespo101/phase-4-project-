class TeachersController < ApplicationController

    def index
        render json: Teacher.all, status: :ok
    end 

    def create 
        teacher = Teacher.create(teacher_params)
        if teacher.valid?
            session[:teacher_id] = teacher.id
            render json: teacher, status: :created
        else
            render json: teacher.errors.full_messages, status: 422
        end
    end

    def show 
        teacher = Teacher.find_by(id: params[:id])
        if teacher
            render json: teacher, status: :ok
        else
            render json: {error: "teacher not found"}, status: 404
        end
    end

    def destroy
        teacher = Teacher.find_by(id: params[:id])
        if teacher 
            teacher.destroy 
            head :no_content
        else
            render json: {error: "teacher not found"}, status: 404
        end
    end


    private 

    def teacher_params
        params.permit(:username, :password_digest)
    end

end
