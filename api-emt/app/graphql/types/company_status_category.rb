# app/graphql/types/media_category.rb
class Types::CompanyStatusCategory < Types::BaseEnum
  value ::Company::STATUS_RESTRICTED
  value ::Company::STATUS_ACTIVE
end
