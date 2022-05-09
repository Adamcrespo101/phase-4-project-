class SessionsController < ApplicationController
#skip_before_action :authorized?
    
        def create 
        teacher = Teacher.find_by(username: params[:username])
        if teacher&.authenticate(params[:password])
            session[:teacher_id] = teacher.id
            render json: teacher, status: :created
        else
            render json: { error: {login: "Invalid username or password"}, status: :unauthorized }
        end
    end

    def destroy 
        
        session.delete :teacher_id
    end

    def current_user 
    teacher = Teacher.find_by(id: session[:teacher_id])
    end

end
