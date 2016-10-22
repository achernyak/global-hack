class CreateReservations < ActiveRecord::Migration[5.0]
  def change
    create_table :reservations do |t|
      t.datetime :starts_at
      t.references :client, foreign_key: true
      t.references :shelter, foreign_key: true
      t.datetime :ends_at
      t.references :bed, foreign_key: true

      t.timestamps
    end
  end
end
