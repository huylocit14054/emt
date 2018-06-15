

# Seed 50 users
User.create(username: "quangnhat", email: "quangnhat@gmail.com", role: "root_admin", password: "quangnhat")
50.times do
    User.create(username: Faker::Internet.user_name(6..255), email: Faker::Internet.email(6..255), password: "123456")
end

# Seed projects
10.times do |p|
   project =  Project.create(name: Faker::RickAndMorty.unique.location, description: Faker::RickAndMorty.unique.quote)
   ProjectMember.create(user_id: 1 , project_id: project.id, role: "project_admin")
   ProjectMember.create(user_id: rand(2..51) , project_id: project.id, role: "project_admin")
   # Seed project member
    6.times do |member|
        begin
        ProjectMember.create(user_id: rand(2..51) , project_id: project.id, role: "member")
        rescue
            retry
        end 
    end
end



# Seed selection dimension
4.times do
    dimension = Dimension.create(name: "UTM_" + Faker::Hacker.unique.abbreviation, category: "selection", project_id: rand(1..3))
    10.times do
        Option.create(name: Faker::LeagueOfLegends.unique.champion, dimension: dimension)
    end
end

# Seed input dimension
2.times do
    Dimension.create(name: "UTM_" + Faker::Hacker.unique.abbreviation, category: "input", project_id: rand(1..3))
end

# Seed authorization
20.times do
    begin
        Authorization.create(project_member_id: rand(1..50), dimension_id: rand(1..6))
    rescue
        retry
    end
end

# Seed option authorization
10.times do
    begin
        OptionAuthorization.create(authorization_id: rand(1..20), option_id: rand(1..40))
    rescue
        retry
    end
    
end