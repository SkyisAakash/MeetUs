
import values from 'lodash/values';


export const selectMemberGroups = (state) => {
  // debugger
  let result = [];
  let userId = state.session.currentUser.id; // 11
  // console.log(state);
  let memberGroups = Object.values(state.entities.groupmembers).map(object => {
    // debugger
      if(object.user_id === userId && state.entities.groups[object.group_id]){
        // debugger
        result.push(state.entities.groups[object.group_id]);
      }
  });
  Object.values(state.entities.groups).map(group => {
    if  (group.organizer_id === userId) {
      result.push(group);
    }
  });
  // debugger
  // console.log(result);
  return result;
};

export const selectOtherGroups = (state) => {
  // debugger
  // let result = [];
  let userId = state.session.currentUser.id; // 11
  let allGroups = state.entities.groups;
  // console.log(state);
  let memberGroups = Object.values(state.entities.groupmembers).map(object => {
    // debugger
      if(object.user_id === userId && state.entities.groups[object.group_id]){
        // debugger
        delete allGroups[object.group_id];
        // result.push(state.entities.groups[object.group_id]);
      }
  });
  Object.values(state.entities.groups).map(group => {
    if  (group.organizer_id === userId) {
      delete allGroups[group.id];
    }
  });

  // debugger
  // console.log(result);
  return Object.values(allGroups);
};
