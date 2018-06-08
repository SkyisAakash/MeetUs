import {
  RECEIVE_GROUPS,
  RECEIVE_GROUP,
  REMOVE_GROUP,
} from '../actions/group_actions';
import merge from 'lodash/merge';

const groupsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_GROUPS:
      return merge({}, action.groups);
      case RECEIVE_GROUP:
        return merge({}, state, {[action.group.id]:action.group});
      case REMOVE_GROUP:
        let newState = merge({}, state);
        delete newState[action.groupId];
        return newState;
    default:
      return state;
  }
};

export default groupsReducer;
