class Api::GroupsController < ApplicationController

  def index
    if params[search_query] = ""
      @groups = Group.all
    else
      @groups = Group.where("title LIKE '%#{params[:search_query]}'")
    end
    render json: @groups
  end


    def show
      @group = Group.find(params[:id])
    end

    def create
      @group = Group.new(group_params)
      if @group.save
        render :show
      else
        render json: @group.errors.full_messages, status: 422
      end
    end

    def update
      @group = Group.find_by(id: params[:id])
      if @group.update(group_params)
        render :show
      else
        render json: @group.errors.full_messages, status: 422
      end
    end

    def destroy
      @group = Group.find(params[:id])
      @group.destroy
      render :show
    end

    private

    def group_params
      params.require(:group).permit(:search_query, :description, :title, :organizer_id)
    end
end
