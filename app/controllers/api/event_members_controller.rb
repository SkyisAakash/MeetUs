class Api::EventMembersController < ApplicationController
  before_action :require_logged_in

    def index
      # debugger
      @eventmembers = EventMember.all
    end
      def create
        # debugger
        @eventmember = EventMember.new(user_id:params[:user_id], event_id:params[:event_id])
        if @eventmember.save
          render :show
        else
          render json: @eventmember.errors.full_messages, status: 422
        end
      end

      def destroy
        @eventmember = EventMember.find(params[:id])
        @eventmember.destroy
      end

end
