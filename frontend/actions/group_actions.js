import * as GroupAPIUtil from '../util/group_api_util';
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";


export const requestgroups = () => {
  return dispatch => {
    return GroupAPIUtil.fetchgroups().then(res => dispatch({type: RECEIVE_GROUPS, groups:res}));
  };
};
