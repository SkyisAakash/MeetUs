class DropGroupIndices < ActiveRecord::Migration[5.1]
  def change
    drop_table :group_indices
  end
end
