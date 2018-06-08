class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      # Tell the user that something went wrong. Let them try again.
 render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find_by(id:params[:id])
    render "api/users/show"
  end

  # def update
  #   debugger
  #   @user = User.find_by(id:params[:user][:id])
  #   new_ids = params[:user][:group_ids]
  #   result = [];
  #   new_ids.each do |asso|
  #     result.push asso.to_i
  #   end
  #   debugger
  #   @user.group_ids = result;
  #   debugger
  #   # if @user.update_attributes(group_followed_ids: new_ids)
  #     render "api/users/show"
    # else
      # render json: @user.errors.full_messages, status: 422
    # end
  # end



  # def search
  #   @users = User.where("username LIKE '%#{params[:query]}%'")
  #   render json: @users
  # end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :group_ids)
  end
end
