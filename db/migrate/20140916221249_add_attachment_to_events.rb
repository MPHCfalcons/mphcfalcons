class AddAttachmentToEvents < ActiveRecord::Migration
  def change
    add_column :refinery_events, :attachment_id, :resource
  end
end
