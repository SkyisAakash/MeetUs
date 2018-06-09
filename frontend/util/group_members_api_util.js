export const deleteMembership = (id) => {
  return $.ajax({
    url:`api/group_members/${id}`,
    method:'DELETE',
  });
};
export const createMembership = (group_id, user_id) => {
  return $.ajax({
    url:`api/group_members`,
    method:'POST',
    data:{group_id, user_id}
  });
};
export const receiveMemberships = () => {
  return $.ajax({
    url:`api/group_members`,
    method:'GET',
  });
};
