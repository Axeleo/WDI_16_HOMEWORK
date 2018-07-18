require 'sinatra/reloader'
require 'sinatra'
require 'pry'
require 'httparty'
require 'pg'


test = HTTParty.get("http://omdbapi.com/?t=jaws&apikey=2f6435d9")

def run_sql(sql)
  conn = PG.connect(dbname: 'moviedb')
  result = conn.exec(sql)
  conn.close
  result
end

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
  
  if results = run_sql("SELECT * FROM movies WHERE title = '#{params[:movie_title]}'").ntuples == 1
    from_db = run_sql("SELECT * FROM movies WHERE title = '#{params[:movie_title]}'")
    @movie = from_db.first
  else

  response = HTTParty.get("http://omdbapi.com/?t=#{params[:movie_title]}&apikey=2f6435d9")
  
  fetched_title = response['Title']
  fetched_director = response['Director']
  fetched_metascore = response['Metascore']
  fetched_actors = response['Actors']
  fetched_genre = response['Genre']
  fetched_poster = response['Poster']
  fetched_released = response['Released']
  fetched_plot = response['Plot']
  
  insert_sql = "INSERT INTO movies (title, director, metascore, actors, genre, poster, released, plot) VALUES ('#{fetched_title}', '#{fetched_director}', '#{fetched_metascore}', '#{fetched_actors}', '#{fetched_genre}', '#{fetched_poster}', '#{fetched_released}', '#{fetched_plot}')"
  
  run_sql(insert_sql)

  from_db = run_sql("SELECT * FROM movies WHERE title = '#{params[:movie_title]}'")
  @movie = from_db.first
  # binding.pry
  end
  erb :movie
end


