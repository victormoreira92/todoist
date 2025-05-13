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
require 'rails_helper'

RSpec.describe Project, type: :model do
  let(:project) { build(:project) }

  context 'is valid' do
    it 'with valid attributes' do
      expect { create(:project) }.to change(described_class, :count).by(1)
    end
  end

  context 'is invalid' do
    %w[name].each do |attribute|
      it "without #{attribute}" do
        expect(build(:project, "project_without_#{attribute}".to_sym)).not_to be_valid
      end
    end
  end
end
