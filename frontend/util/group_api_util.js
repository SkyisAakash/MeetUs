export const fetchGroups = (search_query) => {
  // debugger
  return $.ajax({
    url:`api/groups`,
    method:'GET',
    data:{search_query}
  });
};
export const fetchGroup = (id) => {
  return $.ajax({
    url:`api/groups/${id}`,
    method:'GET'
  });
};
export const createGroup = (group) => {
  return $.ajax({
    url:`api/groups`,
    method:'POST',
    data:{group}
  });
};
export const updateGroup = (group) => {
  return $.ajax({
    url:`api/groups/${group.id}`,
    method:'PATCH',
    data:{group}
  });
};
export const deleteGroup = (id) => {
  return $.ajax({
    url:`api/groups/${id}`,
    method:'DELETE'
  });
};
