Rails.application.routes.draw do
  resources :moons
  # resources :planets


  # READ
  get '/planets/', to: 'planets#index'
  get '/planets/:id', to: 'planets#show'

  # CREATE
  post '/planets', to: 'planets#create'
  post '/planers/moons' to: 'moons#create'

  #UPDATE
  get '/planets/:id/edit', to: 'planets#edit'
  put 'planets/:id', to: 'planets#update'
  put 'planets/moon/:id'

  #destroy
  delete 'planets/:id', to: 'planets#destroy'

end
