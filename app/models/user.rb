class User < ApplicationRecord
  has_many :reviews

  def self.from_auth_hash(payload)
    User.find_or_create_by(auth_sub: payload["sub"]) do |user|
      user.avatar_url = payload["picture"]
      user.name = payload["name"]
    end
  end
end
