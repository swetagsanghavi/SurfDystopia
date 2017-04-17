# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  listing_id :integer          not null
#  author_id  :integer          not null
#  title      :string
#  body       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  rating     :float
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
