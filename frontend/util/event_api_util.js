export const fetchEvents = (search_query) => {
  // debugger
  return $.ajax({
    url:`api/events`,
    method:'GET',
    data:{search_query}
  });
};
export const fetchEvent = (id) => {
  return $.ajax({
    url:`api/events/${id}`,
    method:'GET'
  });
};
export const createEvent = (event) => {
  return $.ajax({
    url:`api/events`,
    method:'POST',
    data:{event}
  });
};
export const updateEvent = (event) => {
  return $.ajax({
    url:`api/events/${event.id}`,
    method:'PATCH',
    data:{event}
  });
};
export const deleteEvent = (id) => {
  return $.ajax({
    url:`api/events/${id}`,
    method:'DELETE'
  });
};
