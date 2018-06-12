
import values from 'lodash/values';


export const selectMemberEvents = (state) => {
  let result = [];
  let userId = state.session.currentUser.id; // 11
  // console.log(state);
  // debugger
  let memberEvents = Object.values(state.entities.eventmembers).map(object => {
      if(object.user_id === userId && state.entities.events[object.event_id]){
        // debugger
        result.push(state.entities.events[object.event_id]);
      }
  });
  Object.values(state.entities.events).map(event => {
    if  (event.organizer_id === userId) {
      // debugger
      result.push(event);
    }
  });
  // console.log(result);
  // debugger
  return result;
};

export const selectOtherEvents = (state) => {
  // debugger
  // let result = [];
  let userId = state.session.currentUser.id; // 11
  const allEvents = Object.assign({},state.entities.events);
  // console.log(state);
  let memberEvents = Object.values(state.entities.eventmembers).map(object => {
    // debugger
      if(object.user_id === userId && state.entities.events[object.event_id]){
        // debugger
        delete allEvents[object.event_id];
        // result.push(state.entities.events[object.event_id]);
      }
  });
  Object.values(state.entities.events).map(event => {
    if  (event.organizer_id === userId) {
      // debugger
      delete allEvents[event.id];
    }
  });

  // debugger
  // console.log(result);
  return Object.values(allEvents);
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
