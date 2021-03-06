class GraphqlPolicy
  RULES = {
    Types::Project.to_graphql.to_s => {
      '*': lambda { |project, _args, ctx|
        ProjectPolicy.new(ctx[:current_user], project).show?
      }
    },
    Types::Company.to_graphql.to_s => {
      '*': lambda { |company, _args, ctx|
        CompanyPolicy.new(ctx[:current_user], company).show?
      }
    }

  }

  def self.guard(type, field)
    type.introspection? ? ->(_obj, _args, _ctx) { true } : RULES.dig(type.to_s, field)
  end
end
