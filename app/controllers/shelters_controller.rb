class SheltersController < ApplicationController
  before_action :set_shelter, only: [:show, :update, :destroy, :checkin, :checkout]

  # GET /shelters
  def index
    @shelters = Shelter.all

    render json: @shelters.to_json(methods: :map_icon)
  end

  # GET /shelters/1
  def show
    render json: @shelter
  end

  # PUT /shelters/1/checkin
  def checkin
    @shelter.checkins ||= 0
    @shelter.checkins += 1
    if @shelter.save
      render json: @shelter
    else
      render json: @shelter.errors, status: :unprocessable_entity
    end
  end

  # PUT /shelters/1/checkout
  def checkout
    @shelter.checkins ||= 0
    @shelter.checkins -= 1
    if @shelter.save
      render json: @shelter
    else
      render json: @shelter.errors, status: :unprocessable_entity
    end
  end

  # POST /shelters
  def create
    @shelter = Shelter.new(shelter_params)

    if @shelter.save
      render json: @shelter, status: :created, location: @shelter
    else
      render json: @shelter.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shelters/1
  def update
    if @shelter.update(shelter_params)
      render json: @shelter
    else
      render json: @shelter.errors, status: :unprocessable_entity
    end
  end

  # DELETE /shelters/1
  def destroy
    @shelter.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shelter
      @shelter = Shelter.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def shelter_params
      params.require(:shelter).permit(:name, :address, :city, :state, :zip, :phone, :capacity)
    end
end
