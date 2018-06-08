class Api::GroupMembersController < ApplicationController

    def create
      debugger
      @groupmember = GroupMember.new(user_id:params[:user_id], group_id:params[:group_id])
      if @groupmember.save
        debugger
        @user = User.find(params[:user_id])
        render "api/users/show"
      else
        render json: @groupmember.errors.full_messages, status: 422
      end
    end

    def destroy
      @groupmember = Group.find_by(user_id:params[:user_id], group_id:params[:group_id])
      @groupmember.destroy
    end
    private



end
