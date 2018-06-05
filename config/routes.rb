Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
  resources :users, only: [:create, :index]
  resource :session, only: [:new, :create, :destroy]
  resources :groups, only: [:index]
  end

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
