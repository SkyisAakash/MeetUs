export const deleteMembership = (group_id, user_id) => {
  return $.ajax({
    url:`api/group_members`,
    method:'DELETE',
    data:{group_id, user_id}
  });
};
export const createMembership = (group_id, user_id) => {
  return $.ajax({
    url:`api/group_members`,
    method:'POST',
    data:{group_id, user_id}
  });
};
