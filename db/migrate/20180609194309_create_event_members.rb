class CreateEventMembers < ActiveRecord::Migration[5.1]
  def change
    create_table :event_members do |t|
        t.integer :user_id, null: false
        t.integer :event_id, null: false
        t.timestamps
      end
      add_index :event_members, :user_id
      add_index :event_members, :event_id
  end
end
