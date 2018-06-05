import React from 'react';
import ReactDOM from 'react-dom';
// import * as Methods from './util/sess  ion_api_util.js';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
  const preloadedState = { session: { currentUser: window.currentUser } };
  store = configureStore(preloadedState);

  // Clean up after ourselves so we don't accidentally use the
  // global currentUser instead of the one in the store
  delete window.currentUser;

} else {
  store = configureStore();
}
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

});
