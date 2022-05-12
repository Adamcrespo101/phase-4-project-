class CurrentCoursesController < ApplicationController


    def index 
        render json: CurrentCourse.all, status: :ok
    end

    def show 
        course = CurrentCourse.find_by(student_id: params[:id])
        render json: course, status: :ok
    end

end
