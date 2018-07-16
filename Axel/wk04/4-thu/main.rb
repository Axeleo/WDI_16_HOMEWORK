require'pry'
require'sinatra'
require'sinatra/reloader'

get '/' do
  @bottles = 99
  @bottles_take = @bottles - 1
  erb(:index)
end 

get '/:num_bottles' do
  @bottles = params[:num_bottles].to_i
  @bottles_take = params[:num_bottles].to_i - 1
  erb(:index)
end

