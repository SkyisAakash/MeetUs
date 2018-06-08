import React from 'react';
import { connect } from 'react-redux';
import { requestGroup, deleteGroup } from '../../actions/group_actions';
import { createGroupMember, deleteGroupMember } from '../../actions/group_member_actions';
import {getUser} from '../../actions/user_actions';
import GroupShow from './group_show';
import { openModal} from '../../actions/modal_actions';


const msp = (state,ownProps) => ({
  group: state.entities.groups[ownProps.match.params.groupId],
  currentUser: state.session.currentUser
});

const mdp = (dispatch, ownProps) => ({
  requestGroup: () => dispatch(requestGroup(ownProps.match.params.groupId)),
  deleteGroup:() => dispatch(deleteGroup(ownProps.match.params.groupId)),
  createGroupMember:(group_id, user_id) => dispatch(createGroupMember(group_id,user_id)),
  deleteGroupMember:(group_id, user_id) => dispatch(deleteGroupMember(group_id,user_id)),
  getUser:(id)=> dispatch(getUser(id)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(msp, mdp)(GroupShow);
