class CreateClients < ActiveRecord::Migration[5.0]
  def change
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.string :city
      t.string :state
      t.string :phone
      t.date :date_of_birth
      t.string :gender

      t.timestamps
    end
  end
end
