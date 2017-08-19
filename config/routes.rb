Rails.application.routes.draw do
  resources :question_options
  resources :questions
  resources :tests
  resources :groups
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount_ember_app :frontend, to: "/"
end
