

# Seed 21 users
puts "Create User"
User.create(username: "quangnhat", email: "quangnhat@gmail.com", role: "root_admin", password: "quangnhat")
20.times do
    User.create(username: Faker::Internet.user_name(6..255), email: Faker::Internet.email(6..255), password: "123456")
end

# Seed projects
10.times do |p|
   project =  Project.create(name: Faker::RickAndMorty.unique.location, description: Faker::RickAndMorty.unique.quote)
   puts "Create project #{project.name}"
   ProjectMember.create(user_id: 1 , project_id: project.id, role: "project_admin")
   ProjectMember.create(user_id: rand(2..21) , project_id: project.id, role: "project_admin")
    # Seed selection dimension
    7.times do |i|
        begin 
            dimension = Dimension.create(name: "UTM_" + Faker::Hacker.abbreviation , category: "selection", project: project)
            raise unless dimension.save
        rescue 
            retry
        end
        10.times do
            begin
                option = Option.create(name: Faker::LeagueOfLegends.champion, dimension: dimension)
                raise unless option.save   
            rescue
                retry
            end 
        end
    end 


<<<<<<< HEAD
    # Seed input dimension
    3.times do |i|
        begin 
            dimension = Dimension.create(name: "UTM_" + Faker::Hacker.abbreviation, category: "input", project: project)
            raise unless dimension.save
        rescue
            retry
        end
=======

# Seed selection dimension
4.times do
    dimension = Dimension.create(name: "UTM_" + Faker::Hacker.unique.abbreviation, category: "selection", project_id: rand(1..10))
    10.times do
        Option.create(name: Faker::LeagueOfLegends.unique.champion, dimension: dimension)
>>>>>>> 79e8cec3f6a9ec197b0fcf61e3e4806e3bd7ff21
    end

<<<<<<< HEAD
    dimensions = project.dimensions
    # Seed project member
    10.times do
        begin
            member = ProjectMember.create(user_id: rand(2..21) , project: project, role: "member")
            raise unless member.save
        rescue
            retry
        end
=======
# Seed input dimension
2.times do
    Dimension.create(name: "UTM_" + Faker::Hacker.unique.abbreviation, category: "input", project_id: rand(1..10))
end
>>>>>>> 79e8cec3f6a9ec197b0fcf61e3e4806e3bd7ff21

        # Seed authorization
        5.times do
            begin
                dimension = dimensions.sample
                authorization = Authorization.create(project_member: member , dimension: dimension)
                raise unless authorization.save
            rescue
                retry
            end
            if (dimension.category == "selection") 
                options = dimension.options
                # Seed option authorization
                5.times do
                    begin
                        option_auth = OptionAuthorization.create(authorization: authorization, option: options.sample)
                        raise unless option_auth.save
                    rescue
                        retry
                    end
                end
            end
        end
    end
end


