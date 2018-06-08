# == Schema Information
#
# Table name: group_members
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  group_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GroupMember < ApplicationRecord

  belongs_to :member,
  foreign_key: :user_id,
  primary_key: :id,
  class_name: :User

  belongs_to :group,
  foreign_key: :group_id,
  primary_key: :id,
  class_name: :Group
end
