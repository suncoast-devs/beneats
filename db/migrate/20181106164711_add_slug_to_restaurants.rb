class AddSlugToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :slug, :string
    Restaurant.reset_column_information
    Restaurant.all.each do |restaurant|
      restaurant.update(slug: restaurant.name.parameterize)
    end
  end
end
