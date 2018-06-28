class Utm < ApplicationRecord
  belongs_to :project_member

  # base on the values the user return generate new link
  # example hash value: values: {"url": google.com}
  def generate_url(values:)

  end 
end
