export const fetchgroups = () => {
  return $.ajax({
    url:`api/groups`,
    method:'GET'
  });
};
