import {
  RECEIVE_EVENTMEMBER,
  RECEIVE_EVENTMEMBERS,
  REMOVE_EVENTMEMBER,
} from '../actions/event_member_actions';
import merge from 'lodash/merge';

const eventmemberReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENTMEMBERS:
      let object = merge({}, state, action.eventmembers);
      return merge({}, action.eventmembers);
    case RECEIVE_EVENTMEMBER:
      return merge({}, state, action.eventmember);
      case REMOVE_EVENTMEMBER:
        let newState = merge({}, state);
        delete newState[action.eventmember];
        return newState;
    default:
      return state;
  }
};

export default eventmemberReducer;
