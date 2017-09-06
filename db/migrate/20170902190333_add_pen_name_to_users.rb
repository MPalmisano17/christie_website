class AddPenNameToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :pen_name, :text, default: ""

    add_index :users, :pen_name
  end
end
