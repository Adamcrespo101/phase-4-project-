class GradesController < ApplicationController

    def index 
        render json: Grade.all, status: :ok
    end

    def show 
        grade = Grade.where(teacher_id: params[:id])
        render json: grade, include: :student, status: 200
    end

    def report_card 
        grade = Grade.where(student_id: params[:id])
        render json: grade, include: :teacher, status: 200
    end

    def create
       
        grade = Grade.create!(grade_params)
        render json: grade, status: :ok
    end

    def find 
        grade = Grade.find_by(id: params[:id])
        render json: grade
    end

    def update 
        grade = Grade.find_by(id: params[:id])
        grade.update(feedback: params[:feedback], result: params[:result])
        render json: grade, status: :accepted
    end

    def destroy 
        grade = Grade.find_by(id: params[:id])
        grade.destroy
        head :no_content
    end

    private 

    def grade_params
        params.permit(:result, :course_name, :feedback, :student_id, :teacher_id)
    end


end
