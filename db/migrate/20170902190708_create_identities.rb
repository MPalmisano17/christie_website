class CreateIdentities < ActiveRecord::Migration[5.1]
  def change
    create_table :identities do |t|
      t.references :user, foreign_key: true
      t.text :provider
      t.text :uid

      t.timestamps
    end
  end
end
