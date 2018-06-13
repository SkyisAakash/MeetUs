
import values from 'lodash/values';
import keys from 'lodash/keys';

export const eventmembershipcheck = (state, eventid, member) => {
  let gid = Number(eventid);
  let result = "false";
  let objects = Object.values(state.entities.eventmembers);
  // debugger
  for (var i = 0; i < objects.length; i++) {
    // debugger
    if (objects[i].user_id === member.id && objects[i].event_id === gid){
      result = "true";
      break;
    }
  }
  // debugger
  return result;
};




//
// objects.map(object => {
//   if (object.user_id === memberid && object.event_id === eventid){
//     result = true;
//   }
// })
