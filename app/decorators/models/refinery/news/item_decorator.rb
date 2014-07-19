Refinery::News::Item.class_eval do
  attr_accessible :news_image_id
  belongs_to :news_image, :class_name => '::Refinery::Image'
end
