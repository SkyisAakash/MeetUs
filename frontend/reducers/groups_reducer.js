import {
  RECEIVE_GROUPS,
} from '../actions/group_actions';
import merge from 'lodash/merge';

const groupsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_GROUPS:
      return merge({}, state, action.groups);
    default:
      return state;
  }
};

export default groupsReducer;
