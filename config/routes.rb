Rails.application.routes.draw do

  root "boards#index"


  devise_for :users do
    resources :boards
  end

  devise_scope :user do 
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  resources :boards do
    resources :lists
  end

  resources :lists do
    resources :cards
  end
end
