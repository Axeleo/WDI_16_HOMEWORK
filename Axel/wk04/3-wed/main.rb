require'pry'
require'sinatra'
require'sinatra/reloader'
require 'stock_quote'


get '/stock' do 
  @stock =  StockQuote::Stock.quote(params[:stock_ticker])
  erb(:stock)
end

get '/' do
  erb(:index)
end

get '/about' do 
  erb(:about)
end




