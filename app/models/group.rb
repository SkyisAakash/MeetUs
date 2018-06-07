# == Schema Information
#
# Table name: groups
#
#  id           :bigint(8)        not null, primary key
#  title        :string           not null
#  description  :text             not null
#  organizer_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Group < ApplicationRecord

validates :title,:description,:organizer_id, presence: true

belongs_to :user,
primary_key: :id,
foreign_key: :organizer_id,
class_name: :User


end
