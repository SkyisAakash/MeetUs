class Api::EventsController < ApplicationController
  def index
    # debugger
    if params[:search_query]
      if params[:search_query] == ""
        # @events = Event.all
        @events = Event.order('start_date ASC')
      else
        query = "%" + params[:search_query].upcase + "%"
        @events = Event.where("UPPER(title) LIKE ? ORDER BY start_date ASC", query)
      end
    else
      # @events = Event.all
      @events = Event.order('start_date ASC')
    end
    render :index
  end


    def show
      # debugger
      @event = Event.find(params[:id])
    end

    def create
      @event = Event.new(event_params)
      if @event.save
        render :show
      else
        render json: @event.errors.full_messages, status: 422
      end
    end

    def update
      # debugger
      @event = Event.find_by(id: params[:id])
      if @event.update(event_params)
        # debugger
        render :show
      else
        render json: @event.errors.full_messages, status: 422
      end
    end

    def destroy
      @event = Event.find(params[:id])
      @event.destroy
    end

    private

    def event_params
      params.require(:event).permit(:search_query, :description, :title, :organizer_id, :image_url, :address, :organizer_id, :group_id, :start_date, :end_date, :start_time, :end_time)
    end
end
