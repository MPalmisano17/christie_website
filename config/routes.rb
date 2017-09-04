Rails.application.routes.draw do
  root 'root#index'

  devise_for :users, controllers: {omniauth_callbacks: 'omniauth_callbacks'}
end
