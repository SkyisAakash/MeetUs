class ModifyGroups < ActiveRecord::Migration[5.1]
  def change
    add_column :groups, :image_url, :string
  end
end
