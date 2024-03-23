class AddColorToProject < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :color, :string
  end
end
