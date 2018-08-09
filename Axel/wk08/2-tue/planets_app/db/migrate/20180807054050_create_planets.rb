class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    create_table :planets do |t|
      t.text :name
      t.text :img_url
      t.text :distance_from_sun

      t.timestamps
    end
  end
end
