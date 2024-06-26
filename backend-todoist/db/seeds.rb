require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Project.find_or_create_by(name: 'Personal', color: "%06x" % (rand * 0xffffff))
Project.find_or_create_by(name: 'Professional', color: "%06x" % (rand * 0xffffff))

30.times do
  Task.find_or_create_by(title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2),
                         due_date: Faker::Time.between_dates(from: Date.today - 1, to: Date.today.advance(days: 7), period: :morning),
                         project: Project.all.sample)
end
