require 'sinatra/reloader'
require 'sinatra'
require 'pry'
require 'httparty'

test = HTTParty.get("http://omdbapi.com/?t=jaws&apikey=2f6435d9")


get '/' do
  erb :index
end

get '/search' do 

  @results = HTTParty.get("http://omdbapi.com/?s=#{params[:search_term]}&apikey=2f6435d9")
  if @results['Search'].length > 1
    erb :search
  elsif @results['Search'].length == 1
    @movie = HTTParty.get("http://omdbapi.com/?t=#{@results['Search'][0]['Title']}&apikey=2f6435d9")
    erb :movie
  end
end

get '/movie/:movie_title' do 

  @movie = HTTParty.get("http://omdbapi.com/?t=#{params[:movie_title]}&apikey=2f6435d9")
  erb :movie
end




