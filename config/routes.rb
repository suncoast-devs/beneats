Rails.application.routes.draw do
  namespace :api do
    resources :restaurants, only: [:index, :show]
  end

  get "admin", to: "admin#index"

  scope :admin do
    resources :restaurants
    resources :categories
  end

  get "*path", to: "application#fallback_index_html"
end
