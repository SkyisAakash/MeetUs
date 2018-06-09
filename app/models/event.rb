# == Schema Information
#
# Table name: events
#
#  id           :bigint(8)        not null, primary key
#  title        :string           not null
#  description  :text             not null
#  address      :text             not null
#  organizer_id :integer          not null
#  group_id     :integer          not null
#  image_url    :string
#  start_date   :date             not null
#  end_date     :date             not null
#  start_time   :time             not null
#  end_time     :time             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Event < ApplicationRecord
  validates :title,:description,:organizer_id,:address,:group_id,:start_date,:end_date,:start_time,:end_time, presence: true

  belongs_to :group,
  foreign_key: :group_id,
  class_name: :Group

  belongs_to :organizer,
  foreign_key: :organizer_id,
  class_name: :User


  has_many :memberships,
  foreign_key: :event_id,
  class_name: :EventMember

  has_many :members, through: :memberships, source: :member

end
