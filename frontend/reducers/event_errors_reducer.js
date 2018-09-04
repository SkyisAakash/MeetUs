import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  REMOVE_EVENT,
  RECEIVE_EVE_ERRORS,
  REMOVE_EVE_ERRORS
} from '../actions/event_actions';
import merge from 'lodash/merge';

const eventerrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENTS:
      return [];
      case RECEIVE_EVENT:
        return [];
      case RECEIVE_EVE_ERRORS:
      return action.errors;
      case REMOVE_EVE_ERRORS:
      return [];
    default:
      return state;
  }
};

export default eventerrorsReducer;
