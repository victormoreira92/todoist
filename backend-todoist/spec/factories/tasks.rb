# == Schema Information
#
# Table name: tasks
#
#  id          :bigint           not null, primary key
#  title       :string
#  description :string
#  done        :boolean
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  due_date    :datetime
#  project_id  :bigint
#
FactoryBot.define do
  factory :task do
    title { Faker::Lorem.characters(number: 10) }
    description { Faker::Lorem.paragraph }
    due_date { 1.days.ago }
    done { false }
    association :project
  end

  trait :task_without_title do
    title { nil }
  end

  trait :task_with_big_title do
    title { Faker::Lorem.characters(number: 50) }
  end

  trait :task_without_description do
    description { nil }
  end

  trait :task_without_due_date do
    due_date { nil }
  end
end
