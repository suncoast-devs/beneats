class Api::RestaurantsController < ApplicationController
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
    render json: @restaurants.map { |r|
      {
        id: r.id,
        name: r.name,
        location: r.location,
        budget: r.budget,
        slug: r.slug,
        category: {
          id: r.category.id,
          name: r.category.name,
          slug: r.category.slug,
        },
      }
    }
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    render json: {
      id: @restaurant.id,
      name: @restaurant.name,
      location: @restaurant.location,
      budget: @restaurant.budget,
      description: @restaurant.description,
      slug: @restaurant.slug,
      category: {
        id: @restaurant.category.id,
        name: @restaurant.category.name,
        slug: @restaurant.category.slug,
      },
    }
  end
end
