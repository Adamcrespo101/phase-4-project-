class TeachersController < ApplicationController
    #skip_before_action :authorized?

    def index
        render json: Teacher.all, status: :ok
    end 

    def create 
        teacher = Teacher.create!(username: params[:username], password: params[:password])
        if teacher.valid?
            session[:teacher_id] = teacher.id
            render json: teacher, status: :created
        else
            render json: teacher.errors.full_messages, status: 422
        end
    end

    def show 
        if params[:id] #if we have /:id we are getting any user 
            teacher = Teacher.find(params[:id])
            render json: teacher 
        end
        #if we dont have /:id we are authenticating a logged in user 
        teacher = Teacher.find_by(id: session[:teacher_id])
        if teacher
            render json: teacher, status: :ok
        else
            render json: {error: "teacher not found"}, status: 401
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
        params.permit(:username, :password)
    end


end
