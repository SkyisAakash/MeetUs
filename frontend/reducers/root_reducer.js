import EntitiesReducer from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  entities: EntitiesReducer,
  session,
  errors
});
