@eventmembers.each do |eventmember|
  json.set! eventmember.id do
    json.extract! eventmember, :event_id, :user_id
  end
end
