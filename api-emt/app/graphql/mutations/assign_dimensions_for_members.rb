class Mutations::AssignDimensionsForMembers < Mutations::BaseMutation

    argument :members, [String], required: true # id of users not members
    argument :project_id, ID, required: true
    argument :choices, [String], required: true # ["1-2", "3-4"]
    
    field :assigned, Boolean , null: true

    def resolve(members:,project_id:,choices:)
      choices_array = []
      choices.each do |choice|
        choice = choice.split('-')
        choices_array << choice
      end
      members.each do |user_id|
        member = ProjectMember.where(user_id: user_id, project_id: project_id).first
        choices_array.each do |c|
          dimension_id = c[0]
          begin
            auth = member.authorizations.create(dimension_id: dimension_id)
          rescue
            next
          ensure
            if c.length > 1 
              auth ||= member.authorizations.find_by(dimension_id: dimension_id)
              begin
                auth.option_authorizations.create(option_id: c[1])
              rescue
                next
              end
            elsif Dimension.find(dimension_id).category.eql? "selection"
              auth ||= member.authorizations.find_by(dimension_id: dimension_id)
              all_options = Dimension.find(dimension_id).options
              all_options.each do |option|
                begin
                  auth.option_authorizations.create(option: option)
                rescue ActiveRecord::RecordNotUnique
                  next
                end
              end
            end
       
          end
         
        end
      end
      
      {
        assigned: true
      }
    end
  end