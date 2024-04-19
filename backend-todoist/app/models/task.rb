class Task < ApplicationRecord
  validates :title, presence: true, length:{ in: 3..30}
  validates :description, presence: true
  validates :due_date, presence: true
  validate :set_done
  
  def set_done
    self.done = false if self.done.nil?
  end

  scope :newest_first, -> { order(created_at: :desc, updated_at: :desc) }
  scope :today, -> { where(due_date: Time.current.all_day)}
  scope :upcoming, -> { where(due_date: Time.current.end_of_day..)}
  scope :get_by_project, ->(id) { where(project: id) }
  scope :due_date_first, -> {order(due_date: :desc)}
  belongs_to :project, optional: true
end
