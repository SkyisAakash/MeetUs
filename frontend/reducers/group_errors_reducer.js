import {
  RECEIVE_GROUPS,
  RECEIVE_GROUP,
  REMOVE_GROUP,
  RECEIVE_GRP_ERRORS,
  REMOVE_GRP_ERRORS
} from '../actions/group_actions';
import merge from 'lodash/merge';

const grouperrorsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_GROUPS:
      return [];
      case RECEIVE_GROUP:
        return [];
      case RECEIVE_GRP_ERRORS:
      return action.errors;
      case REMOVE_GRP_ERRORS:
      return [];
    default:
      return state;
  }
};

export default grouperrorsReducer;
