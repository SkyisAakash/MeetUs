export const showUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
    data:{id}
  })
);
