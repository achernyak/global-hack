class AddIconToShelter < ActiveRecord::Migration[5.0]
  def change
    add_column :shelters, :icon, :string
  end
end
