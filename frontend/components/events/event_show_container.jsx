import React from 'react';
import { connect } from 'react-redux';
import { requestEvent, deleteEvent } from '../../actions/event_actions';
import { createEventMember, deleteEventMember } from '../../actions/event_member_actions';
import {getUser} from '../../actions/user_actions';
import EventShow from './event_show';
import { openModal, closeModal} from '../../actions/modal_actions';
import { eventmembershipcheck } from '../../reducers/eventmembershipcheck';
import { requestEventMembers } from '../../actions/event_member_actions.js';


const msp = (state,ownProps) => ({
  event: state.entities.events[ownProps.match.params.eventId],
  currentUser: state.session.currentUser,
  groups: state.entities.groups,
  users: state.entities.users,
  eventmemberships: state.entities.eventmembers,
  eventmembershipcheck: eventmembershipcheck(state, ownProps.match.params.eventId, state.session.currentUser)
});

const mdp = (dispatch, ownProps) => ({
  requesteventmembers: () => dispatch(requestEventMembers()),
  requestEvent: () => dispatch(requestEvent(ownProps.match.params.eventId)),
  deleteEvent:() => dispatch(deleteEvent(ownProps.match.params.eventId)),
  createEventMember:(event_id, user_id) => dispatch(createEventMember(event_id,user_id)),
  deleteEventMember:(eventId, id) => dispatch(deleteEventMember(eventId,id)),
  getUser:(id)=> dispatch(getUser(id)),
});

export default connect(msp, mdp)(EventShow);
