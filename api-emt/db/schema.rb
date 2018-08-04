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

ActiveRecord::Schema.define(version: 20180803040019) do

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

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "logo", default: "company_logo_lyrgzi.png"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "phone_number"
    t.string "email"
    t.integer "company_member_count"
    t.bigint "plan_id"
    t.index ["plan_id"], name: "index_companies_on_plan_id"
  end

  create_table "company_members", force: :cascade do |t|
    t.bigint "company_id"
    t.bigint "user_id"
    t.string "roles", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status", default: "pending"
    t.index ["company_id", "user_id"], name: "index_company_members_on_company_id_and_user_id", unique: true
    t.index ["company_id"], name: "index_company_members_on_company_id"
    t.index ["user_id"], name: "index_company_members_on_user_id"
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

  create_table "plan_services", force: :cascade do |t|
    t.bigint "plan_id"
    t.bigint "service_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["plan_id", "service_id"], name: "index_plan_services_on_plan_id_and_service_id", unique: true
    t.index ["plan_id"], name: "index_plan_services_on_plan_id"
    t.index ["service_id"], name: "index_plan_services_on_service_id"
  end

  create_table "plans", force: :cascade do |t|
    t.string "name"
    t.string "description", default: ""
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_plans_on_name", unique: true
  end

  create_table "project_members", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "project_id"
    t.string "role"
    t.string "status", default: "active"
    t.bigint "company_member_id"
    t.index ["company_member_id"], name: "index_project_members_on_company_member_id"
    t.index ["project_id", "company_member_id"], name: "index_project_members_on_project_id_and_company_member_id", unique: true
    t.index ["project_id"], name: "index_project_members_on_project_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "member_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "company_id"
    t.index ["company_id"], name: "index_projects_on_company_id"
    t.index ["name", "company_id"], name: "index_projects_on_name_and_company_id", unique: true
  end

  create_table "rules", force: :cascade do |t|
    t.string "rule_string"
    t.boolean "is_applied", default: true
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_rules_on_project_id"
    t.index ["rule_string", "project_id"], name: "rule_string_key", unique: true
  end

  create_table "services", force: :cascade do |t|
    t.string "name"
    t.string "description", default: ""
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_services_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "role", default: "user"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
    t.string "avatar", default: "default-avatar_wbcfln.png"
    t.string "full_name"
    t.string "status", default: "active"
    t.index ["email"], name: "index_users_on_email"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "utms", force: :cascade do |t|
    t.bigint "project_member_id"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_member_id"], name: "index_utms_on_project_member_id"
  end

  add_foreign_key "authorizations", "dimensions"
  add_foreign_key "authorizations", "project_members"
  add_foreign_key "companies", "plans"
  add_foreign_key "company_members", "companies"
  add_foreign_key "company_members", "users"
  add_foreign_key "dimensions", "projects"
  add_foreign_key "option_authorizations", "authorizations"
  add_foreign_key "option_authorizations", "options"
  add_foreign_key "options", "dimensions"
  add_foreign_key "plan_services", "plans"
  add_foreign_key "plan_services", "services"
  add_foreign_key "project_members", "company_members"
  add_foreign_key "project_members", "projects"
  add_foreign_key "projects", "companies"
  add_foreign_key "rules", "projects"
  add_foreign_key "utms", "project_members"
end
