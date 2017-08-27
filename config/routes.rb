Rails.application.routes.draw do
  mount_ember_app :frontend, to: "/"
  resources :groups, only: [:index, :create, :destroy, :update]
  resources :tests, only: [:index, :create, :destroy, :update, :show]
end
