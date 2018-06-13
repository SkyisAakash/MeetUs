import React from 'react';
import { connect } from 'react-redux';
import { requestEvent, deleteEvent } from '../../actions/event_actions';
import { createEventMember, deleteEventMember } from '../../actions/event_member_actions';
import {getUser} from '../../actions/user_actions';
import EventCard from './event_card';
import { openModal, closeModal} from '../../actions/modal_actions';
import { eventmembershipcheck } from '../../reducers/eventmembershipcheck';
import { requestEventMembers } from '../../actions/event_member_actions.js';
import { selectEventId } from '../../reducers/firsteventselector.js';

const msp = (state, ownProps) => {
  return {
  event: ownProps.event,
  organizer: ownProps.organizer
};};

const mdp = (dispatch) => ({
});

export default connect(msp, mdp)(EventCard);
