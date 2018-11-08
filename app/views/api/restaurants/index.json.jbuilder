json.array! @restaurants do |restaurant|
  json.extract! restaurant, :id, :name, :location, :description, :budget
  json.client_path "/restaurants/#{restaurant.id}-#{restaurant.slug}"
  json.category do
    json.extract! restaurant.category, :name, :slug
  end
end
