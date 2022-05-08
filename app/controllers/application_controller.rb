class ApplicationController < ActionController::API
  include ActionController::Cookies

  def current_user 
    Teacher.find_by(id: session[:teacher_id])
  end

end
