class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  private

  # Method to set the value of current user for the session
  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  # Method to check if a user is logged in
  def logged_in?
    !!current_user
  end

  # Method to start a new session
  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  # Method to delete current session
  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  # Method for checking user authorization
  def require_logged_in
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end

end
