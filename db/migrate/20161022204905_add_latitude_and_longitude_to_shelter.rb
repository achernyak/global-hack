class AddLatitudeAndLongitudeToShelter < ActiveRecord::Migration[5.0]
  def change
    add_column :shelters, :lat, :float
    add_column :shelters, :lng, :float
  end
end
