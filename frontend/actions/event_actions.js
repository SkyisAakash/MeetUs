import * as EventAPIUtil from '../util/event_api_util';
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";


export const requestEvents = (search_query) => {
  return dispatch => {
    return EventAPIUtil.fetchEvents(search_query).then(res => dispatch({type: RECEIVE_EVENTS, events:res}));
  };
};
export const requestEvent = (id) => {
  return dispatch => {
    return EventAPIUtil.fetchEvent(id).then(res => dispatch({type: RECEIVE_EVENT, event:res}));
  };
};

export const createEvent = (event) => {
  return dispatch => {
    return EventAPIUtil.createEvent(event).then(res => dispatch({type: RECEIVE_EVENT, event:res}));
  };
};

export const updateEvent = (event) => {
  return dispatch => {
    return EventAPIUtil.updateEvent(event).then(res => dispatch({type: RECEIVE_EVENT, event:res}));
  };
};

export const deleteEvent = (id) => {
  return dispatch => {
    return EventAPIUtil.deleteEvent(id).then(res => dispatch({type: REMOVE_EVENT}));
  };
};
