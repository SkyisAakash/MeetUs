class Api::GroupsController < ApplicationController
  before_action :require_logged_in

  def index
    # debugger
    # sleep 1
    if params[:search_query]
      if params[:search_query] == ""
        @groups = Group.all
      else
        query = "%" + params[:search_query].upcase + "%"
        @groups = Group.where("UPPER(title) LIKE ?", query)
      end
    else
      @groups = Group.all
    end
    render :index
  end


    def show
      # sleep 1
      # debugger
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
      # debugger
      @group = Group.find_by(id: params[:id])
      if @group.update(group_params)
        # debugger
        render :show
      else
        # debugger
        render json: @group.errors.full_messages, status: 422
      end
    end

    def destroy
      @group = Group.find(params[:id])
      @group.destroy
    end

    private

    def group_params
      params.require(:group).permit(:search_query, :description, :title, :organizer_id, :image_url)
    end
end
