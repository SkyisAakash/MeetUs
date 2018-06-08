Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
  resources :users, only: [:create, :index, :show]
  resource :session, only: [:new, :create, :destroy]
  resources :groups
  resources :group_members, only: [:create, :destroy, :index]
  end

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
