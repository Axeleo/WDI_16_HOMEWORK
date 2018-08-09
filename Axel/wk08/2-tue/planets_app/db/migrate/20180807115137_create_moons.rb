class CreateMoons < ActiveRecord::Migration[5.2]
  def change
    create_table :moons do |t|
      t.string :name
      t.text :img_url
      t.belongs_to :planet, index: true
      t.add_foreign_key :planet
      t.timestamps
    end
  end
end
