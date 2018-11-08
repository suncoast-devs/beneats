class Restaurant < ApplicationRecord
  belongs_to :category
  has_many :reviews
  validates :name, presence: true
  validates :description, presence: true
  validates :location, presence: true
  validates :budget, presence: true, numericality: true
  validates :category_id, presence: true

  def average_rating
    ((reviews.average(:rating) || 0) * 10).to_i / 10.0
  end
end
