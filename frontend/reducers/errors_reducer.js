import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import grouperrorsReducer from './group_errors_reducer';
import eventerrorsReducer from './event_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  group: grouperrorsReducer,
  events: eventerrorsReducer
});

export default errorsReducer;
