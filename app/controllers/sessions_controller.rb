class SessionsController < ApplicationController

    def create 
        user = Teacher.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:teacher_id] = user.id
            render json: user, status: :created
        else
            render json: { error: {login: "Invalid username or password"}, status: :unauthorized }
        end
    end

    def destroy 
        session.delete :user_id
    end

    def current_user 
        Teacher.find_by(id: session[:teacher_id])
    end

end
