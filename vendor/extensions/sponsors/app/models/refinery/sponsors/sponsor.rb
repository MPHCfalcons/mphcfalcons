module Refinery
  module Sponsors
    class Sponsor < Refinery::Core::BaseModel
      self.table_name = 'refinery_sponsors'

      attr_accessible :title, :description, :image_id, :link, :position

      validates :title, :presence => true, :uniqueness => true

      belongs_to :image, :class_name => '::Refinery::Image'
    end
  end
end
