# Seed 3 users
User.create(username: 'quangnhat', email: 'quangnhat@gmail.com', role: User::ROLE_ROOT_ADMIN, password: 'quangnhat')
2.times do |i|
  User.create!(
    username: "#{Faker::Internet.user_name(6..255)} #{i}",
    email: "taolanguoidung#{i}@gmail.com",
    password: '123456'
  )
end

# seed 2 services
utm_service = Service.create(name: 'UTM Service', description: Faker::RickAndMorty.quote)
oms_service = Service.create(name: 'OMS Service', description: Faker::RickAndMorty.quote)
# seed 3 plans
plan = Plan.create(name: 'Standard UTM', description: 'Using UTM service')
# seed plan services
plan.plan_services.create(service: utm_service)
plan = Plan.create(name: 'Standard OMS', description: 'Using OMS service')
# seed plan services
plan.plan_services.create(service: oms_service)
plan = Plan.create(name: 'Premium', description: 'Using both UTM service and OMS service')
# seed plan services
plan.plan_services.create(service: utm_service)
plan.plan_services.create(service: oms_service)

# rubocop:disable Metrics/BlockLength
Plan.all.each do |p|
  # create a company
  company = Company.create(
    name: "Company with #{p.name}",
    address: Faker::RickAndMorty.location,
    phone_number: Faker::PhoneNumber.cell_phone,
    email: Faker::Internet.email,
    plan: p,
    description: Faker::RickAndMorty.quote
  )

  # create company admin
  company.company_members.create!(
    user_id: 1,
    roles: [CompanyMember::ROLE_COMPANY_ADMIN]
  )
  # create UTM manager
  company.company_members.create!(
    user_id: 2,
    roles: [CompanyMember::ROLE_UTM_MANAGER]
  )
  # create OMS manager
  company.company_members.create!(
    user_id: 3,
    roles: [CompanyMember::ROLE_OMS_MANAGER]
  )
  # create 10 company members
  10.times do |i|
    user = company.users.create!(
      username: "#{Faker::Internet.user_name(6..255)}#{i + 3 + (company.id - 1) * 10}",
      email: "taolanguoidung#{i + 3 + (company.id - 1) * 10}@gmail.com",
      password: '123456'
    )
    CompanyMember.find_by(
      company_id: company.id,
      user_id: user.id
    ).update(roles: [
               CompanyMember::ROLE_OMS_MEMBER,
               CompanyMember::ROLE_UTM_MEMBER
             ])
  end
  # get all created company member ids
  user_ids = company.company_members.ids
  # Seed 3 projects
  3.times do |i|
    project = company.projects.create(
      name: Faker::RickAndMorty.location + i.to_s,
      description: Faker::RickAndMorty.quote
    )
    ProjectMember.create(company_member_id: 2, project_id: project.id, role: ProjectMember::ROLE_PROJECT_ADMIN)
    ProjectMember.create(company_member_id: 3, project_id: project.id, role: ProjectMember::ROLE_PROJECT_ADMIN)
    # Seed 7 selection dimension
    7.times do
      begin
        dimension = Dimension.create(
          name: 'UTM_' + Faker::Hacker.abbreviation,
          category: Dimension::CATEGORY_SELECTION,
          project: project
        )
        raise unless dimension.save
      rescue StandardError
        retry
      end
      # create 10 options
      10.times do
        begin
          option = Option.create(name: Faker::LeagueOfLegends.champion, dimension: dimension)
          raise unless option.save
        rescue StandardError
          retry
        end
      end
    end

    # Seed 3 input dimension
    3.times do
      begin
        dimension = Dimension.create(
          name: 'UTM_' + Faker::Hacker.abbreviation,
          category: Dimension::CATEGORY_INPUT,
          project: project
        )
        raise unless dimension.save
      rescue StandardError
        retry
      end
    end

    dimensions = project.dimensions
    # Seed project member
    5.times do
      begin
        member = ProjectMember.create(
          company_member_id: user_ids.sample,
          project: project,
          role: ProjectMember::ROLE_PROJECT_MEMBER
        )
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
        next unless dimension.category == Dimension::CATEGORY_SELECTION
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
      rule_string: "utm_source={{#{dimensions.first.id}}}&&utm_medium={{#{dimensions.last.id}}}"
    )
    # seed un-applied rule
    project.rules.create(
      rule_string: "utm_source={{#{dimensions.last.id}}}&&utm_medium={{#{dimensions.first.id}}}"
    )
  end
end
# rubocop:enable Metrics/BlockLength
