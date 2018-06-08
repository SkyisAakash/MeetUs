import * as GroupAPIUtil from '../util/group_api_util';
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";


export const requestGroups = (search_query) => {
  return dispatch => {
    return GroupAPIUtil.fetchGroups(search_query).then(res => dispatch({type: RECEIVE_GROUPS, groups:res}));
  };
};
export const requestGroup = (id) => {
  return dispatch => {
    return GroupAPIUtil.fetchGroup(id).then(res => dispatch({type: RECEIVE_GROUP, group:res}));
  };
};

export const createGroup = (group) => {
  return dispatch => {
    return GroupAPIUtil.createGroup(group).then(res => dispatch({type: RECEIVE_GROUP, group:res}));
  };
};

export const updateGroup = (group) => {
  return dispatch => {
    return GroupAPIUtil.updateGroup(group).then(res => dispatch({type: RECEIVE_GROUP, group:res}));
  };
};

export const deleteGroup = (id) => {
  return dispatch => {
    return GroupAPIUtil.deleteGroup(id).then(res => dispatch({type: REMOVE_GROUP}));
  };
};
