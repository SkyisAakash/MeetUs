class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.text :address, null: false
      t.integer :organizer_id, null: false
      t.integer :group_id, null: false
      t.string :image_url
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.time :start_time, null: false
      t.time :end_time, null: false
      t.timestamps
    end
    add_index :events, :organizer_id
    add_index :events, :title, unique: true
  end
end
