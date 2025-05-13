# == Route Map
  
#

Rails.application.routes.draw do
  resources :projects

  resources :tasks do
    collection do
      get 'today'
      get 'upcoming'
      get 'getByProject'
    end
  end


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
