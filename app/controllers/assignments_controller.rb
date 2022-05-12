class AssignmentsController < ApplicationController

    def index 
        render json: Assignment.all, status: :ok
    end

    def show 
        assignment = Assignment.find_by(id: params[:id])

        render json: assignment, status: :ok
    end

end
