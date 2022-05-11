class GradesController < ApplicationController

    def index 
        render json: Grade.all, status: :ok
    end

    def show 
        grade = Grade.where(teacher_id: params[:id])
        render json: grade, include: :student, status: 200
    end

    def create
        byebug 
        grade = Grade.create!(grade_params)
        render json: grade, status: :ok
    end

    private 

    def grade_params
        params.permit(:result, :course_name, :feedback, :student_id, :teacher_id)
    end


end
