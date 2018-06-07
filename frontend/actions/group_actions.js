import * as GroupAPIUtil from '../util/group_api_util';
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";


export const requestgroups = () => {
  return dispatch => {
    return GroupAPIUtil.fetchgroups().then(res => dispatch({type: RECEIVE_GROUPS, groups:res}));
  };
};
export const requestGroup = (id) => {
  return dispatch => {
    return GroupAPIUtil.fetchGroup(id).then(res => dispatch({type: RECEIVE_GROUP, event:res}));
  };
};

export const createGroup = (event) => {
  return dispatch => {
    return GroupAPIUtil.createGroup(event).then(res => dispatch({type: RECEIVE_GROUP, event:res}));
  };
};

export const updateGroup = (event) => {
  return dispatch => {
    return GroupAPIUtil.updateGroup(event).then(res => dispatch({type: RECEIVE_GROUP, event:res}));
  };
};

export const deleteGroup = (id) => {
  return dispatch => {
    return GroupAPIUtil.deleteGroup(id).then(res => dispatch({type: REMOVE_GROUP, eventId:res.id}));
  };
};
