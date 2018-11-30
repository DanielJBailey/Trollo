class List < ApplicationRecord
  belongs_to :Board
  has_many :cards, dependent: :destroy
end
