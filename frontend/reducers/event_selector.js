
import values from 'lodash/values';


export const selectMemberEvents = (state) => {
  let result = [];
  let userId = state.session.currentUser.id; // 11
  // console.log(state);
  let memberEvents = Object.values(state.entities.eventmembers).map(object => {
      if(object.user_id === userId && state.entities.events[object.event_id]){
        result.push(state.entities.events[object.event_id]);
      }
  });
  // console.log(result);
  return result;
};

export const findByDate = (state, date) => {
  // debugger
  let result = [];
  Object.values(state.entities.events).map(event => {
    // debugger
    let datecomp = new Date(event.start_date); 
    if (+datecomp >= +date) {
      // debugger
      result.push(event);
    }
  });
  return result;
};
