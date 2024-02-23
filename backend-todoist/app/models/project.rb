class Project < ApplicationRecord
  validates :name, presence: true
  has_many :tasks
  validate :set_color

  def set_color
    self.color_user = "#ffffff" if self.color.nil?
  end

end
