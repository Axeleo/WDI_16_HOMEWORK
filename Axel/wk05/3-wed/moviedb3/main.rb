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

def prepare_sql(statement_name, sql, args)
  conn = PG.connect(dbname: 'moviedb')
  conn.prepare(statement_name, sql)
  result = conn.exec_prepared(statement_name, args)
  conn.close
  result
end

def select_movie(movie_title)
  conn = PG.connect(dbname: 'moviedb')
  conn.prepare('find movie', "SELECT * FROM movies WHERE LOWER(title) = LOWER($1)")
  result = conn.exec_prepared('find movie', [movie_title])
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
  
  movie = select_movie(params[:movie_title])

  unless movie.ntuples > 0 

  response = HTTParty.get("http://omdbapi.com/?t=#{params[:movie_title]}&apikey=2f6435d9")
  
  fetched_title = response['Title']
  fetched_director = response['Director']
  fetched_metascore = response['Metascore']
  fetched_actors = response['Actors']
  fetched_genre = response['Genre']
  fetched_poster = response['Poster']
  fetched_released = response['Released']
  fetched_plot = response['Plot']

  prepare_sql('Create movie', "INSERT INTO movies (title, director, metascore, actors, genre, poster, released, plot) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);", [fetched_title, fetched_director, fetched_metascore, fetched_actors, fetched_genre, fetched_poster, fetched_released, fetched_plot])
  end
  
  from_db = select_movie(params[:movie_title])
  @movie = from_db.first
  # binding.pry
  end
  erb :movie
end


