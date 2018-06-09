import React from 'react';
import { connect } from 'react-redux';
import { requestGroup, deleteGroup } from '../../actions/group_actions';
import { createGroupMember, deleteGroupMember } from '../../actions/group_member_actions';
import {getUser} from '../../actions/user_actions';
import GroupShow from './group_show';
import { openModal, closeModal} from '../../actions/modal_actions';
import { membershipcheck } from '../../reducers/membershipcheck';


const msp = (state,ownProps) => ({
  group: state.entities.groups[ownProps.match.params.groupId],
  currentUser: state.session.currentUser,
  users: state.entities.users,
  groupmemberships: state.entities.groupmembers,
  membershipcheck: membershipcheck(state, ownProps.match.params.groupId, state.session.currentUser)
});

const mdp = (dispatch, ownProps) => ({
  requestGroup: () => dispatch(requestGroup(ownProps.match.params.groupId)),
  deleteGroup:() => dispatch(deleteGroup(ownProps.match.params.groupId)),
  createGroupMember:(group_id, user_id) => dispatch(createGroupMember(group_id,user_id)),
  deleteGroupMember:(groupId, id) => dispatch(deleteGroupMember(groupId,id)),
  getUser:(id)=> dispatch(getUser(id)),
  otherForm: (
    <button onClick={() => dispatch(openModal('edit'))}>
      Edit Modal
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(GroupShow);
