import * as GroupMemberAPIUtil from '../util/group_members_api_util';
export const RECEIVE_GROUPMEMBER = "RECEIVE_GROUPMEMBER";
export const REMOVE_GROUPMEMBER = "REMOVE_GROUPMEMBER";
import { receiveCurrentUser } from '../actions/session_actions';

export const createGroupMember = (group_id, user_id) => {
  return dispatch => {
    return GroupMemberAPIUtil.createMembership(group_id, user_id).then(res => dispatch(receiveCurrentUser(res)));
  };
};

export const deleteGroupMember = (group_id, user_id) => {
  return dispatch => {
    return GroupMemberAPIUtil.deleteMembership(group_id, user_id).then(res => dispatch(receiveCurrentUser(res)));
  };
};
