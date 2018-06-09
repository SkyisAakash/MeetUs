export const deleteMembership = (id) => {
  return $.ajax({
    url:`api/event_members/${id}`,
    method:'DELETE',
  });
};
export const createMembership = (event_id, user_id) => {
  return $.ajax({
    url:`api/event_members`,
    method:'POST',
    data:{event_id, user_id}
  });
};
export const receiveMemberships = () => {
  return $.ajax({
    url:`api/event_members`,
    method:'GET',
  });
};
