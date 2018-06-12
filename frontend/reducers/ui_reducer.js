import { combineReducers } from 'redux';
import loading from './loading_reducer';
import modal from './modal_reducer';

export default combineReducers({
  modal,
  loading
});
