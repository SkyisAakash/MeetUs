
import values from 'lodash/values';


export const selectMemberEvents = (state) => {
  let result = [];
  let userId = state.session.currentUser.id;
  let memberEvents = Object.values(state.entities.eventmembers).map(object => {
      if(object.user_id === userId && state.entities.events[object.event_id]){
        result.push(state.entities.events[object.event_id]);
      }
  });
  Object.values(state.entities.events).map(event => {
    if  (event.organizer_id === userId) {
      result.push(event);
    }
  });
  return result;
};

export const selectOtherEvents = (state) => {
  let userId = state.session.currentUser.id; // 11
  const allEvents = Object.assign({},state.entities.events);
  let memberEvents = Object.values(state.entities.eventmembers).map(object => {
      if(object.user_id === userId && state.entities.events[object.event_id]){
        delete allEvents[object.event_id];
      }
  });
  Object.values(state.entities.events).map(event => {
    if  (event.organizer_id === userId) {
      delete allEvents[event.id];
    }
  });
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

export const selectAttendees = (state, eve_id) => {
  let result = [];
  Object.values(state.entities.eventmembers).map(object => {
    if (object.event_id === parseInt(eve_id)) {
      result.push(state.entities.users[object.user_id]);
    }
  });
  return result;
};

export const findMyByDate = (state, date) => {
  let result = [];
  let ans = [];
  Object.values(state.entities.events).map(event => {
    let datecomp = new Date(event.start_date);
    if (+datecomp >= +date) {
      result.push(event);
    }
  });
  Object.values(state.entities.eventmembers).map(object => {
      if(object.user_id === state.session.currentUser.id && result.indexOf(state.entities.events[object.event_id]))
        ans.push(state.entities.events[object.event_id]);
    });
  return ans;
};
