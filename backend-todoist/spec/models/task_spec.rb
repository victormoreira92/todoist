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
require 'rails_helper'

RSpec.describe Task, type: :model do
  let(:task) { build(:task) }

  context 'is valid' do
    it 'with valid attributes' do
      expect { create(:task) }.to change(described_class, :count).by(1)
    end
  end

  context 'is invalid' do
    %w[title description due_date].each do |attribute|
      it "without #{attribute}" do
        action = "task_without_#{attribute}".to_sym
        expect(build(:task, action)).not_to be_valid
      end
    end

    it 'with title with over words' do
      expect(build(:task, :task_with_big_title)).not_to be_valid
    end

    it 'with title with less words' do
      expect(build(:task, title: 'aa')).not_to be_valid
    end
  end
end
