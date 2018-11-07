class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.text :description
      t.text :location
      t.integer :budget
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
