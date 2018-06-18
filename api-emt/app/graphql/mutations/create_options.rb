class Mutations::CreateOptions < Mutations::BaseMutation

    argument :names, [String] , required: true
    argument :dimension_id, ID, required: true
    
    field :created_options, Boolean, null: true
    
    def resolve(names:, dimension_id:)
        names.each do |name|
            begin
                option = Option.create(name: name, dimension_id: dimension_id)
            rescue
                next
            end
        end
        {
            created_options: true
        }
 
    end
  end