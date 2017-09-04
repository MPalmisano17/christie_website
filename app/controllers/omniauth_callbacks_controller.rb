class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    @user = User.find_by_oauth(env['omniauth.auth'], current_user)

    if @user.persisted?
        sign_in @user
    else

    end
  end
end
