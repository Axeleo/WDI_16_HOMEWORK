Rails.application.routes.draw do
  resources :moons
  # resources :planets


  # READ
  get '/planets/', to: 'planets#index'
  get '/planets/:id', to: 'planets#show'

  # CREATE
  post '/planets', to: 'planets#create'

  #UPDATE
  get '/planets/:id/edit', to: 'planets#edit'
  put 'planets/:id', to: 'planets#update'

  #destroy
  delete 'planets/:id', to: 'planets#destroy'

end
