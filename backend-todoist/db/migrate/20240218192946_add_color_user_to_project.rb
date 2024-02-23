class AddColorUserToProject < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :color_user, :string
  end
end
