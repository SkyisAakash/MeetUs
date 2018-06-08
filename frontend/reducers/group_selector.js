
import values from 'lodash/values';


export const selectMemberGroups = (state) => {
  let result = [];
  let userId = state.session.currentUser.id; // 11
  console.log(state);
  let memberGroups = Object.values(state.entities.groupmembers).map(object => {
      if(object.user_id === userId && state.entities.groups[object.group_id]){
        result.push(state.entities.groups[object.group_id]);
      }
  })
  // console.log(result);
  return result;
}
