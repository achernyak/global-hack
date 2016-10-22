class Bed < ApplicationRecord
  belongs_to :shelter

  has_many :reservations
end
