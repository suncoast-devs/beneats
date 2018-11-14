class Api::ReviewsController < ApplicationController
  before_action :set_default_response_format
  skip_before_action :verify_authenticity_token

  def create
    @restaurant = Restaurant.find(params[:restaurant_id])
    @review = @restaurant.reviews.new(review_params)
    @review.user = current_user

    if @review.save
      render json: @review
    else
      render json: {errors: @review.errors.full_messages}
    end
  end

  private

  def set_default_response_format
    request.format = :json
  end

  def review_params
    params.require(:review).permit(:rating, :message)
  end
end
