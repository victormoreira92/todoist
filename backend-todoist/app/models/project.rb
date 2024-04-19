class Project < ApplicationRecord
  validates :name, presence: true, length: { in: 3..25 }
  has_many :tasks, dependent: :delete_all

  def set_color
    self.color_user = "#ffffff" if self.color.nil?
  end

  scope :created_first, -> {order(created_at: :desc)}

end
