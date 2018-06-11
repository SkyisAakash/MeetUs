import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { GET_USERS, SHOW_USER } from '../actions/user_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case GET_USERS:
      return merge({}, state, action.users);
    case SHOW_USER:
      return merge({}, state, {[action.user.id]:action.user});
    default:
      return state;
  }
};

export default usersReducer;
