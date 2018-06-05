import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';

const _nullUser = {
  currentUser: null
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
    return Object.assign({}, { currentUser });
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default sessionReducer;
