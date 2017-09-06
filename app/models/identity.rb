class Identity < ApplicationRecord
  belongs_to :user
  validates_presence_of :uid, :provider
  validates_uniqueness_of :uid, scope: :provider

  def self.find_by_oauth(auth)
    find_of_create_by(uid: auth.uid, provider: auth.provider)
  end
end
