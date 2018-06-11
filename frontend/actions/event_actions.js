import * as EventAPIUtil from '../util/event_api_util';
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const RECEIVE_EVE_ERRORS = "RECEIVE_EVE_ERRORS";
export const REMOVE_EVE_ERRORS = "REMOVE_EVE_ERRORS";

export const receiveEveErrors = errors => ({
  type: RECEIVE_EVE_ERRORS,
  errors
});
export const removeEveErrors = errors => ({
  type: REMOVE_EVE_ERRORS,
});
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

//
// export const createEvent = (event) => {
//   return dispatch => {
//     return EventAPIUtil.createEvent(event).then(res => dispatch({type: RECEIVE_EVENT, event:res})),
//     err => dispatch(receiveEveErrors(err.responseJSON));
//   };
// };
export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event: event
});
export const createEvent = event => dispatch => (
  EventAPIUtil.createEvent(event).then(res => (
    dispatch(receiveEvent(res))
  ), err => (
    dispatch(receiveEveErrors(err.responseJSON))
  ))
);


// export const updateEvent = (event) => {
//   return dispatch => {
//     return EventAPIUtil.updateEvent(event).then(res => dispatch({type: RECEIVE_EVENT, event:res})),
//     err => dispatch(receiveEveErrors(err.responseJSON));
//   };
// };
export const editEvent = event => ({
  type: RECEIVE_EVENT,
  event: event
});
export const updateEvent = event => dispatch => (
  EventAPIUtil.updateEvent(event).then(res => (
    dispatch(receiveEvent(res))
  ), err => (
    dispatch(receivegrpErrors(err.responseJSON))
  ))
);

export const deleteEvent = (id) => {
  return dispatch => {
    return EventAPIUtil.deleteEvent(id).then(res => dispatch({type: REMOVE_EVENT}));
  };
};
