class TasksController < ApplicationController
  before_action :set_task, only: %i[ show update destroy ]


  # GET /tasks
  def index
    @tasks = Task.all.newest_first

    render json: @tasks
  end



  # GET /tasks/1
  def show
    render json: @task
  end

  def getByProject
    @task = Task.get_by_project(params[:project_id]).due_date_first
    
    render json: @task
  end

  def today
    @tasks = Task.today.newest_first

    render json: @tasks
  end

  def upcoming
    @tasks = Task.upcoming.newest_first

    render json: @tasks
  end

  # POST /tasks
  def create

    @task = Task.new(task_params)
    
    if @task.save
      render json: @task, status: :created, location: @task
    else
      render json: @task.errors.full_messages, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  def destroy
    @task.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def task_params
      params.require(:task).permit(:title, :description, :done, :due_date, :project_id)
    end
end
