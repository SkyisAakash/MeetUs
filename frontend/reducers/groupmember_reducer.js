import {
  RECEIVE_GROUPMEMBER,
  RECEIVE_GROUPMEMBERS,
  REMOVE_GROUPMEMBER,
} from '../actions/group_member_actions';
import merge from 'lodash/merge';

const groupmemberReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GROUPMEMBERS:
      let object = merge({}, action.groupmembers);
      return merge({}, action.groupmembers);
    case RECEIVE_GROUPMEMBER:
      return merge({}, state, action.groupmember);
      case REMOVE_GROUPMEMBER:
        let newState = merge({}, state);
        delete newState[action.groupmember];
        return newState;
    default:
      return state;
  }
};

export default groupmemberReducer;
