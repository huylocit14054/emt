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

ActiveRecord::Schema.define(version: 20180612075500) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authorizations", force: :cascade do |t|
    t.bigint "project_member_id"
    t.bigint "dimension_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dimension_id"], name: "index_authorizations_on_dimension_id"
    t.index ["project_member_id", "dimension_id"], name: "authorization_key", unique: true
    t.index ["project_member_id"], name: "index_authorizations_on_project_member_id"
  end

  create_table "dimensions", force: :cascade do |t|
    t.string "name"
    t.string "category"
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "project_id"], name: "dimention_name", unique: true
    t.index ["project_id"], name: "index_dimensions_on_project_id"
  end

  create_table "option_authorizations", force: :cascade do |t|
    t.bigint "authorization_id"
    t.bigint "option_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["authorization_id", "option_id"], name: "multiple_choice_authorization_option", unique: true
    t.index ["authorization_id"], name: "index_option_authorizations_on_authorization_id"
    t.index ["option_id"], name: "index_option_authorizations_on_option_id"
  end

  create_table "options", force: :cascade do |t|
    t.string "name"
    t.bigint "dimension_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dimension_id"], name: "index_options_on_dimension_id"
    t.index ["name", "dimension_id"], name: "option_name", unique: true
  end

  create_table "project_members", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.bigint "project_id"
    t.string "role"
    t.index ["project_id"], name: "index_project_members_on_project_id"
    t.index ["user_id", "project_id"], name: "project member index", unique: true
    t.index ["user_id"], name: "index_project_members_on_user_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "member_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_projects_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "role", default: "user"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
    t.index ["email"], name: "index_users_on_email"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "authorizations", "dimensions"
  add_foreign_key "authorizations", "project_members"
  add_foreign_key "dimensions", "projects"
  add_foreign_key "option_authorizations", "authorizations"
  add_foreign_key "option_authorizations", "options"
  add_foreign_key "options", "dimensions"
  add_foreign_key "project_members", "projects"
  add_foreign_key "project_members", "users"
end
