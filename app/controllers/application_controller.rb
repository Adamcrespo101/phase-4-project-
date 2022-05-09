class ApplicationController < ActionController::API


  include ActionController::Cookies

  
  private 

  #def authorized? 
   # render json: {message: "You are not authorized"}, status: :unauthorized unless Teacher.find_by(id: session[:teacher_id])
#end

end
