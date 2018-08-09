class PlanetsController < ApplicationController

  def index
    @planets = Planet.all
    @planet = Planet.new
  end

  def show
    @planet = Planet.find(params[:id])
  end

  def destroy
    @planet = Planet.find(params[:id])
    if @planet.destroy
      redirect_to '/planets'
    else 
      render :show
    end
  end

  def update
    @planet = Planet.find(params[:id])
    @planet.img_url = params[:img_url]
    @planet.name = params[:name]
    @planet.distance_from_sun = params[:distance_from_sun]
    if @planet.save
      redirect_to "/planets/#{params[:id]}"
    else
      render :edit
    end
  end

  def edit
    @planet = Planet.find(params[:id])
  end

  def create
    @planet = Planet.new
    @planet.name = params[:name]
    @planet.img_url = params[:img_url]
    @planet.distance_from_sun = params[:distance_from_sun]
    if @planet.save
      redirect_to '/planets'
    else
      render :index
    end
  end

  
end
