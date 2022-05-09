Rails.application.routes.draw do
  
  resources :grades
  resources :teachers, only: [:index, :create, :show, :destroy]
  resources :students, only: [:index, :create, :show, :destroy]

  post '/login', to: "sessions#create"
  
  delete '/logout', to: "sessions#destroy"
  
  get '/auth', to: "teachers#show"
  
  get '/signup', to: "teachers#create"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
