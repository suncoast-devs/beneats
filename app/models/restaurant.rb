class Restaurant < ApplicationRecord
  belongs_to :category
  validates :name, presence: true
  validates :description, presence: true
  validates :location, presence: true
  validates :budget, presence: true, numericality: true
  validates :category_id, presence: true
end
