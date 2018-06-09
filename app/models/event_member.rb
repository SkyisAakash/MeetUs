# == Schema Information
#
# Table name: event_members
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class EventMember < ApplicationRecord
  belongs_to :member,
  foreign_key: :user_id,
  primary_key: :id,
  class_name: :User

  belongs_to :event,
  foreign_key: :event_id,
  primary_key: :id,
  class_name: :Event

end
