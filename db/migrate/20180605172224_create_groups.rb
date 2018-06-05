class CreateGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :groups do |t|
      t.timestamps
      t.integer, :organizer_id, null: false
      t.string, :title, null: false
      t.description, null: false
    end
    add_index :groups, :organizer_id
    add_index :groups, :title, unique: true
  end
end
