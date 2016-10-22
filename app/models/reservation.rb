class Reservation < ApplicationRecord
  belongs_to :client
  belongs_to :shelter
  belongs_to :bed
end
