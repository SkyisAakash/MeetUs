import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_ERRORS= "REMOVE_ERRORS";
export const UPDATE_USER="UPDATE_USER";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const removeErrors = errors => ({
  type: REMOVE_ERRORS
});

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(res => (
    dispatch(receiveCurrentUser(res))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(res => (
    dispatch(receiveCurrentUser(res))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(res => (
    dispatch(logoutCurrentUser())
  ))
);
export const update = (user) => dispatch => (
  SessionAPIUtil.update(user).then(res => (
    dispatch(receiveCurrentUser(res))
  ))
);
