
import values from 'lodash/values';
import keys from 'lodash/keys';

export const membershipcheck = (state, groupid, memberid) => {
  let result = false;
  let objects = Object.values(state.entities.groupmembers);
  objects.map(object => {
    if (object.user_id === memberid && object.group_id === groupid){
      result = true;
      break;
    }
  })
  return result;
}
