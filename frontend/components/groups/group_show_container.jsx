import React from 'react';
import { connect } from 'react-redux';
import { requestGroup, deleteGroup } from '../../actions/group_actions';
import { requestEvents } from '../../actions/event_actions';
import { getUser } from '../../actions/user_actions';
import { createGroupMember, deleteGroupMember } from '../../actions/group_member_actions';
// import {getUser} from '../../actions/user_actions';
import GroupShow from './group_show';
import { openModal, closeModal} from '../../actions/modal_actions';
import { membershipcheck } from '../../reducers/membershipcheck';
import { requestGroupMembers } from '../../actions/group_member_actions.js';
import { selectEventId } from '../../reducers/firsteventselector.js';


const msp = (state,ownProps) => ({
  group: state.entities.groups[ownProps.match.params.groupId],
  currentUser: state.session.currentUser,
  users: state.entities.users,
  events: state.entities.events,
  groupmemberships: state.entities.groupmembers,
  membershipcheck: membershipcheck(state,
              ownProps.match.params.groupId,
              state.session.currentUser),
  selectEvent: selectEventId(Object.values(state.entities.events),
                            parseInt(ownProps.match.params.groupId))[0],
  laterEvents: selectEventId(Object.values(state.entities.events),
                            parseInt(ownProps.match.params.groupId)).slice(1),
  loading: state.ui.loading.detailLoading

});

const mdp = (dispatch, ownProps) => ({
  requestgroupmembers: () => dispatch(requestGroupMembers()),
  requestGroup: () => dispatch(requestGroup(ownProps.match.params.groupId)),
  deleteGroup:() => dispatch(deleteGroup(ownProps.match.params.groupId)),
  createGroupMember:(group_id, user_id) =>
                    dispatch(createGroupMember(group_id,user_id)),
  deleteGroupMember:(groupId, id) => dispatch(deleteGroupMember(groupId,id)),
  getUser:(id )=> dispatch(getUser(id)),
  requestEvents: ()=>dispatch(requestEvents())
});

export default connect(msp, mdp)(GroupShow);
