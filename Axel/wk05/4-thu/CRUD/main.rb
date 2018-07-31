     
require 'sinatra'
require 'pry'
require_relative 'db_config'
require_relative 'models/terrain'
require_relative 'models/comment'
require_relative 'models/user'

enable :sessions

helpers do

  def current_user
      User.find_by(id: session[:user_id])
  end

  def logged_in?
    !!current_user
  end

end


get '/' do
  @terrains = Terrain.all
  erb :index
end


get '/terrain/new' do
  erb :new
end

get '/terrain/:id' do
  @terrain = Terrain.find(params[:id])
  @comments = @terrain.comments
  erb :terrain_details
end

post '/terrain' do
  terrain = Terrain.new
  terrain.name = params[:name]
  terrain.image_url = params[:image_url]
  terrain.save
redirect '/'
end

delete '/terrain/:id' do
  terrain = Terrain.find(params[:id])
  terrain.destroy
redirect '/'
end

get '/terrain/:id/edit' do
  @terrain = Terrain.find(params[:id])
  erb :edit
end


put '/terrains/:id' do 
  terrain = Terrain.find(params[:id])
  terrain.name = params[:name]
  terrain.image_url = params[:image_url]
  redirect "/terrains/#{params[:id]}"
end

post '/comments' do 
  redirect '/login' unless logged_in?
  comment = Terrain.new
  comme.terrain_id = params[:terrain_id]
  comment.content = params[:content]
  comment.save
  redirect "/terrains/#{params[:id]}"
end

get '/login' do
  erb :login
end 

post '/session' do
  user = User.find_by(email: params[:email])

  if user && user.authenticate(params[:password])

    session[:user_id] = user.id
    redirect '/'
  else
    erb :login
  end

end


delete '/session' do 
  session[:user_id] = nil
  redirect '/'
end