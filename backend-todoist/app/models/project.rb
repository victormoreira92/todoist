# == Schema Information
#
# Table name: projects
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  color_user :string
#  color      :string
#
class Project < ApplicationRecord
  validates :name, presence: true, length: { in: 3..25 }
  has_many :tasks, dependent: :delete_all

  def set_color
    self.color_user = "#ffffff" if self.color.nil?
  end

  scope :created_first, -> {order(created_at: :desc)}

end
