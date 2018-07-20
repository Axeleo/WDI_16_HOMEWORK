     
require 'sinatra'
require 'pry'
require_relative 'db_config'

get '/' do
  erb :index
end


get '/terrian/new' do

end

get '/terrain/:id' do

end

post '/terrian' do

redirect '/'
end

delete '/terrain/:id' do

redirect '/'
end

get '/dishes/:id/edit' do


end

post '/comments' do 
  
end