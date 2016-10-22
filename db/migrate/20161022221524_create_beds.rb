class CreateBeds < ActiveRecord::Migration[5.0]
  def change
    create_table :beds do |t|
      t.boolean :family
      t.string :name
      t.references :shelter, foreign_key: true

      t.timestamps
    end
  end
end
