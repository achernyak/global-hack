class Shelter < ApplicationRecord
  geocoded_by :full_street_address, :latitude  => :lat, :longitude => :lng    # can also be an IP address
  after_validation :geocode          # auto-fetch coordinates

  def full_street_address
    "#{self.address}. #{self.city}, #{self.state}. #{self.zip}"
  end
end
