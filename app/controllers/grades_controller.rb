class GradesController < ApplicationController

    def show 
        grade = Grade.where(teacher_id: params[:id])
        render json: grade, include: :student, status: 200
    end
end
