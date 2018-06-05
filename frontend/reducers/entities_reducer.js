import GroupsReducer from './groups_reducer';
import usersReducer from './users_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  groups: GroupsReducer,
  users: usersReducer
});
