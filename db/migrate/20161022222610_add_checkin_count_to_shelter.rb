class AddCheckinCountToShelter < ActiveRecord::Migration[5.0]
  def change
    add_column :shelters, :checkins, :integer
  end
end
