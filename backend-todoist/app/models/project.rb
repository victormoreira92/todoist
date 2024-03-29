class Project < ApplicationRecord
  validates :name, presence: true
  has_many :tasks

  def set_color
    self.color_user = "#ffffff" if self.color.nil?
  end

  scope :created_first, -> {order(created_at: :desc)}

end
