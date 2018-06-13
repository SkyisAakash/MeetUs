import * as EventMemberAPIUtil from '../util/event_members_api_util';
export const RECEIVE_EVENTMEMBER = "RECEIVE_EVENTMEMBER";
export const RECEIVE_EVENTMEMBERS = "RECEIVE_EVENTMEMBERS";
export const REMOVE_EVENTMEMBER = "REMOVE_EVENTMEMBER";
import { receiveCurrentUser } from '../actions/session_actions';

export const createEventMember = (event_id, user_id) => {
  return dispatch => {
    return EventMemberAPIUtil.createMembership(event_id, user_id)
    .then(res => dispatch({type:RECEIVE_EVENTMEMBER, eventmember:res}));
  };
};

export const deleteEventMember = (eventId, id) => {
  return dispatch => {
    return EventMemberAPIUtil.deleteMembership(id)
    .then(res => dispatch({type:REMOVE_EVENTMEMBER, eventmember:eventId}));
  };
};
export const requestEventMembers = () => {
  return dispatch => {
    return EventMemberAPIUtil.receiveMemberships()
    .then(res => dispatch({type: RECEIVE_EVENTMEMBERS, eventmembers:res}));
  };
};
