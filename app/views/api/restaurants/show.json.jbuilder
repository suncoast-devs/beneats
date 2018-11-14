# render json: {
#   id: @restaurant.id,
#   name: @restaurant.name,
#   location: @restaurant.location,
#   budget: @restaurant.budget,
#   description: @restaurant.description,
#   slug: @restaurant.slug,
#   category: {
#     id: @restaurant.category.id,
#     name: @restaurant.category.name,
#     slug: @restaurant.category.slug,
#   },
# }

json.extract! @restaurant, :id, :name, :location, :budget, :description, :average_rating
json.category do
  json.extract! @restaurant.category, :name, :slug
end

json.reviews do
  json.array! @restaurant.reviews do |review|
    json.extract! review, :id, :rating, :message
    json.user do
      json.extract! review.user, :name, :avatar_url, :created_at
    end
  end
end
