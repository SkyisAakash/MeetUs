export const showUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
    data:{id}
  })
);

export const getUsers = () => {
return  $.ajax({
    method: 'GET',
    url: `/api/users/`
  });
};
