class Task < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validate :set_done
  
  def set_done
    self.done = false if self.done.nil?
  end

  scope :newest_first, -> { order(created_at: :desc) }

  #belongs_to :project
end
