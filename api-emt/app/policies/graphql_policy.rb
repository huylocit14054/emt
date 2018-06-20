class GraphqlPolicy
  RULES = {
    Types::Project.to_graphql.to_s => {
      '*': ->(project, args, ctx) {
        ProjectPolicy.new(ctx[:current_user], project).show?
      }
    },
  }

  def self.guard(type, field)
    type.introspection? ? ->(_obj, _args, _ctx) { true } : RULES.dig(type.to_s, field)
  end
end
