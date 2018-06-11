// import merge from 'lodash/merge';
//
// // import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
// import { GET_USER } from '../actions/user_actions';
//
//
// const userReducer = (state = {}, action) => {
//   Object.freeze(state);
//   switch(action.type) {
//     case RECEIVE_CURRENT_USER:
//       // return merge({}, state, { [action.currentUser.id]: action.currentUser });
//     case GET_USER:
//       return merge({}, state, action.user);
//     default:
//       return state;
//   }
// };
//
// export default userReducer;
