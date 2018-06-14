
//
// export const selectEventId = (events, grp_id) => {
//   let result; // 11
//   // debugger
//   if (events !== []){
//     // debugger
//     for (var i = 0; i < events.length; i++) {
//     if(events[i].group_id === grp_id){
//       result = events[i].id;
//       break;
//     }
// }
// // debugger
// return result;
// }
// };

// debugger
export const selectEventId = (events, grp_id) => {
  let result; // 11
  let mindate = new Date("3050-3-3");
  let more = [];
  // debugger
  if (events !== []){
for (var i = 0; i < events.length; i++) {
if(events[i].group_id === grp_id){
  let date1 = new Date(events[i].start_date);
  // debugger
  if (date1 < mindate){
    // debugger
      if (result) { more.push(result); }
      mindate = date1;
      result = events[i];
      // debugger
  } else {
    more.push(events[i]);
  }
}
}
// debugger
return [result].concat(more);
}
};
