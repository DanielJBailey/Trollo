class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :boards

  def get_initials
    first_letter = self.first_name.split('').first
    second_letter = self.last_name.split('').first
    "#{first_letter.upcase}#{second_letter.upcase}"
  end

  def full_name
    "#{self.first_name} #{self.last_name}"
  end
end
