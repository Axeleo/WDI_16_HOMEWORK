class MoonsController < ApplicationController

  def index
    @moons = Moon.all
    @moon = Moon.new
  end

  def show
    @moon = Moon.find(params[:id])
  end

  def destroy
    @moon = Moon.find(params[:id])
    if @moon.destroy
      redirect_to '/moons'
    else 
      render :show
    end
  end

  def update
    @moon = Moon.find(params[:id])
    @moon.img_url = params[:img_url]
    @moon.name = params[:name]
    @moon.distance_from_sun = params[:distance_from_sun]
    if @moon.save
      redirect_to "/moons/#{params[:id]}"
    else
      render :edit
    end
  end

  def edit
    @moon = Moon.find(params[:id])
  end

  def create
    @moon = Moon.new
    @moon.name = params[:name]
    @moon.img_url = params[:img_url]
    @moon.distance_from_sun = params[:distance_from_sun]
    if @moon.save
      redirect_to '/moons'
    else
      render :index
    end
  end

end
