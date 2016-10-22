Rails.application.routes.draw do
  resources :reservations
  resources :beds
  resources :clients
  resources :shelters do
    member do
      patch 'checkin'
      patch 'checkout'
    end
  end
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
