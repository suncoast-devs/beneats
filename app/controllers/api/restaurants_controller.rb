class Api::RestaurantsController < ApplicationController
  before_action :set_default_response_format

  def index
    scope = Restaurant.order(name: :ASC)
    scope = scope.limit(params[:limit].to_i) if params[:limit]

    if params[:query]
      query = "%#{params[:query]}%"
      sql = <<~SQL
        name ILIKE ? OR
        description ILIKE ? OR
        location ILIKE ?
      SQL
      scope = scope.where(sql, query, query, query)
    end

    @restaurants = scope
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  private

  def set_default_response_format
    request.format = :json
  end
end
