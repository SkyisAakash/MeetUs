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



  # def search
  #   @users = User.where("username LIKE '%#{params[:query]}%'")
  #   render json: @users
  # end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
