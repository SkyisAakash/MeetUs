import * as UserAPIUtil from '../util/user_api_util';
export const SHOW_USER = 'SHOW_USER';

export const showUser = user => ({
  type: SHOW_USER,
  user
});

export const getUser = (id) => dispatch => (
  UserAPIUtil.showUser(id).then(res => (
    dispatch(showUser(res))
  ))
);
export const GET_USERS = 'GET_USERS';

export const getUsers = users => {
  return {
  type: GET_USERS,
  users
};
};

export const requestUsers = () => dispatch => (
  UserAPIUtil.getUsers().then(res => (
    dispatch(getUsers(res))
  ))
);
