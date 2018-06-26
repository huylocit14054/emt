# Seed 50 users
User.create(username: 'quangnhat', email: 'quangnhat@gmail.com', role: User::ROLE_ROOT_ADMIN, password: 'quangnhat')
50.times do
  User.create(username: Faker::Internet.user_name(6..255), email: Faker::Internet.email(6..255), password: '123456')
end

# Seed projects
# rubocop:disable Metrics/BlockLength
10.times do
  project = Project.create(name: Faker::RickAndMorty.unique.location, description: Faker::RickAndMorty.unique.quote)
  puts "Create project #{project.name}"
  ProjectMember.create(user_id: 1, project_id: project.id, role: 'project_admin')
  ProjectMember.create(user_id: rand(2..21), project_id: project.id, role: 'project_admin')
  # Seed selection dimension
  7.times do
    begin
      dimension = Dimension.create(name: 'UTM_' + Faker::Hacker.abbreviation, category: 'selection', project: project)
      raise unless dimension.save
    rescue StandardError
      retry
    end
    10.times do
      begin
        option = Option.create(name: Faker::LeagueOfLegends.champion, dimension: dimension)
        raise unless option.save
      rescue StandardError
        retry
      end
    end
  end

  # Seed input dimension
  3.times do
    begin
      dimension = Dimension.create(name: 'UTM_' + Faker::Hacker.abbreviation, category: 'input', project: project)
      raise unless dimension.save
    rescue StandardError
      retry
    end
  end

  dimensions = project.dimensions
  # Seed project member
  10.times do
    begin
      member = ProjectMember.create(user_id: rand(2..21), project: project, role: 'member')
      raise unless member.save
    rescue StandardError
      retry
    end

    # Seed authorization
    5.times do
      begin
        dimension = dimensions.sample
        authorization = Authorization.create(project_member: member, dimension: dimension)
        raise unless authorization.save
      rescue StandardError
        retry
      end
      next unless dimension.category == 'selection'
      options = dimension.options
      # Seed option authorization
      5.times do
        begin
          option_auth = OptionAuthorization.create(authorization: authorization, option: options.sample)
          raise unless option_auth.save
        rescue StandardError
          retry
        end 
      end
    end
  end
  dimensions = project.dimensions
  # seed rules
  # seed applied rule
  project.rules.create(
    rule_string: "url?utm_source=<<#{dimensions.first.name}>>&&utm_medium=<<#{dimensions.last.name}>>",
    is_applied: true
  )
  # seed un-applied rule
  project.rules.create(
    rule_string: "url?utm_source=<<#{dimensions.last.name}>>&&utm_medium=<<#{dimensions.first.name}>>",
    is_applied: false
  )
end
# rubocop:enable Metrics/BlockLength
