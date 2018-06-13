import * as GroupMemberAPIUtil from '../util/group_members_api_util';
export const RECEIVE_GROUPMEMBER = "RECEIVE_GROUPMEMBER";
export const RECEIVE_GROUPMEMBERS = "RECEIVE_GROUPMEMBERS";
export const REMOVE_GROUPMEMBER = "REMOVE_GROUPMEMBER";
import { receiveCurrentUser } from '../actions/session_actions';

export const createGroupMember = (group_id, user_id) => {
  return dispatch => {
    return GroupMemberAPIUtil.createMembership(group_id, user_id)
    .then(res => dispatch({type:RECEIVE_GROUPMEMBER, groupmember:res}));
  };
};

export const deleteGroupMember = (groupId, id) => {
  return dispatch => {
    return GroupMemberAPIUtil.deleteMembership(id)
    .then(res => dispatch({type:REMOVE_GROUPMEMBER, groupmember:groupId}));
  };
};
export const requestGroupMembers = () => {
  return dispatch => {
    return GroupMemberAPIUtil.receiveMemberships()
    .then(res => dispatch({type: RECEIVE_GROUPMEMBERS, groupmembers:res}));
  };
};
