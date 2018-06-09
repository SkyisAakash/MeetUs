class Api::GroupMembersController < ApplicationController

  def index
    # debugger
    @groupmembers = GroupMember.all
  end
    def create
      # debugger
      @groupmember = GroupMember.new(user_id:params[:user_id], group_id:params[:group_id])
      if @groupmember.save
        render :show
      else
        render json: @groupmember.errors.full_messages, status: 422
      end
    end

    def destroy
      @groupmember = GroupMember.find(params[:id])
      @groupmember.destroy
    end
    private



end
