class Types::Json < Types::BaseScalar

    def self.coerce_input(input_value, context)
        JSON.parse(input_value)
    end

    def self.coerce_result(ruby_value, context)     
        JSON.dump(ruby_value)      
    end

end