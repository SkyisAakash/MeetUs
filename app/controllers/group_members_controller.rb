class GroupMembersController < ApplicationController

  def create
    @groupmember = GroupMember.new(group_member_params)
    if @groupmember.save
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

  def groupmember_params
    params.require(:groupmember).permit(:group_id, :user_id)
  end
end
