import * as GroupAPIUtil from '../util/group_api_util';
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";
export const RECEIVE_GRP_ERRORS = "RECEIVE_GRP_ERRORS";
export const REMOVE_GRP_ERRORS = "REMOVE_GRP_ERRORS";

export const requestGroups = (search_query) => {
  return dispatch => {
    return GroupAPIUtil.fetchGroups(search_query).then(res => dispatch({type: RECEIVE_GROUPS, groups:res}));
  };
};
export const receivegrpErrors = errors => ({
  type: RECEIVE_GRP_ERRORS,
  errors
});
export const removegrpErrors = errors => ({
  type: REMOVE_GRP_ERRORS,
});
export const requestGroup = (id) => {
  return dispatch => {
    return GroupAPIUtil.fetchGroup(id).then(res => dispatch({type: RECEIVE_GROUP, group:res}));
  };
};

// export const createGroup = (group) => {
//   return dispatch => {
//     return GroupAPIUtil.createGroup(group).then(res => dispatch({type: RECEIVE_GROUP, group:res})),
//     err => (dispatch(receivegrpErrors(err.responseJSON)));
//   };
// };
export const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group: group
});
export const createGroup = group => dispatch => (
  GroupAPIUtil.createGroup(group).then(res => (
    dispatch(receiveGroup(res))
  ), err => (
    dispatch(receivegrpErrors(err.responseJSON))
  ))
);

// export const updateGroup = (group) => {
//   return dispatch => {
//     return GroupAPIUtil.updateGroup(group).then(res => dispatch({type: RECEIVE_GROUP, group:res})),
//     err => (dispatch(receivegrpErrors(err.responseJSON)));
//   };
// };
export const editGroup = group => ({
  type: RECEIVE_GROUP,
  group: group
});
export const updateGroup = group => dispatch => (
  GroupAPIUtil.updateGroup(group).then(res => (
    dispatch(receiveGroup(res))
  ), err => (
    dispatch(receivegrpErrors(err.responseJSON))
  ))
);

export const deleteGroup = (id) => {
  return dispatch => {
    return GroupAPIUtil.deleteGroup(id).then(res => dispatch({type: REMOVE_GROUP}));
  };
};
