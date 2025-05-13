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
FactoryBot.define do
  factory :project do
    name { Faker::Lorem.sentence(word_count: 2) }
  end

  trait :name do
    name { nil }
  end
end
