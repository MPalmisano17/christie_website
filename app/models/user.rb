class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :recoverable,
         :rememberable, :trackable, :validatable, :confirmable,
         :omniauthable, omniauth_providers: [:facebook]

  has_many :identities

  def self.find_by_oauth(auth, signed_in_resource = nil)
    identity = Identity.find_by_oauth(auth)
    user = signed_in_resource || identity.user

    if user.nil?
      email = auth.info.email || auth.info.verified_email
      pen_name = auth.info.name
      user = User.find_or_initialize_by(
        email: email,
        pen_name: pen_name,
        password: Devise.friendly_token[0, 20]
      )
      user.skip_confirmation!
      user.save!
    end
  end
end
