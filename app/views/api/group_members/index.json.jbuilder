@groupmembers.each do |groupmember|
  json.set! groupmember.id do
    json.extract! groupmember, :group_id, :user_id
  end
end
