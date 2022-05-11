Rails.application.routes.draw do
  
  resources :grades
  resources :teachers, only: [:index, :create, :show, :destroy]
  resources :students, only: [:index, :create, :show, :destroy]

  post '/login', to: "sessions#create"

  post '/student/login', to: "student_sessions#create"

  delete '/logout', to: "student_sessions#destroy"
  
  delete '/logout', to: "sessions#destroy"
  
  get '/me', to: "teachers#show"

  get '/auth', to: "students#show"
  
  get '/signup', to: "teachers#create"

  get '/find/:id', to: "students#find"

  post '/grades', to: "grades#create"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
