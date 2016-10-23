class Shelter < ApplicationRecord
  has_many :beds
  has_many :reservations
  has_many :clients, through: :reservations

  geocoded_by :full_street_address, :latitude  => :lat, :longitude => :lng    # can also be an IP address
  after_validation :geocode          # auto-fetch coordinates

  def full_street_address
    "#{self.address}. #{self.city}, #{self.state}. #{self.zip}"
  end

  def icon_color
    percent_full = ( self.checkins / self.capacity.to_f )

    if percent_full < 0.5
      "green"
    elsif percent_full < 0.85
      "yellow"
    else
      "red"
    end
  end

  def map_icon
    "Icons_#{icon_color}_#{self.icon}"
  end
end
