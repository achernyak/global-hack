# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161022222610) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "beds", force: :cascade do |t|
    t.boolean  "family"
    t.string   "name"
    t.integer  "shelter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["shelter_id"], name: "index_beds_on_shelter_id", using: :btree
  end

  create_table "clients", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "city"
    t.string   "state"
    t.string   "phone"
    t.string   "email"
    t.date     "date_of_birth"
    t.string   "gender"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "reservations", force: :cascade do |t|
    t.datetime "starts_at"
    t.integer  "client_id"
    t.integer  "shelter_id"
    t.datetime "ends_at"
    t.integer  "bed_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bed_id"], name: "index_reservations_on_bed_id", using: :btree
    t.index ["client_id"], name: "index_reservations_on_client_id", using: :btree
    t.index ["shelter_id"], name: "index_reservations_on_shelter_id", using: :btree
  end

  create_table "shelters", force: :cascade do |t|
    t.string   "name"
    t.string   "address"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.string   "phone"
    t.integer  "capacity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float    "lat"
    t.float    "lng"
    t.integer  "checkins"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "description"
    t.string   "email"
    t.string   "first_name"
    t.string   "last_name"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_foreign_key "beds", "shelters"
  add_foreign_key "reservations", "beds"
  add_foreign_key "reservations", "clients"
  add_foreign_key "reservations", "shelters"
end
