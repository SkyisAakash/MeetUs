
import values from 'lodash/values';
import keys from 'lodash/keys';

export const membershipcheck = (state, groupid, member) => {
  let gid = Number(groupid);
  let result = "false";
  let objects = Object.values(state.entities.groupmembers);
  // debugger
  for (var i = 0; i < objects.length; i++) {
    // debugger
    if (objects[i].user_id === member.id && objects[i].group_id === gid){
      result = "true";
      // debugger
      break;
    }
  }
  return result;
};




//
// objects.map(object => {
//   if (object.user_id === memberid && object.group_id === groupid){
//     result = true;
//   }
// })
