

export const selectEventId = (events, grp_id) => {
  let result; // 11
  // debugger
  if (events !== {}){
    // debugger
  events.map((event) => {
    // debugger
    if(event.group_id === grp_id){
      // debugger
      result = event.id;
    }
  });
  return result;
}
};
