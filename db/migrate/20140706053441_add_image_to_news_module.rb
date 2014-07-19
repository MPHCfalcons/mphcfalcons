class AddImageToNewsModule < ActiveRecord::Migration
  def change
    add_column ::Refinery::News::Item.table_name, :news_image_id, :image
  end
end
