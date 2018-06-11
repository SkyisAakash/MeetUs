// import React from 'react';
// import { connect } from 'react-redux';
// import { requestEvent, deleteEvent } from '../../actions/event_actions';
// import { createEventMember, deleteEventMember } from '../../actions/event_member_actions';
// import {getUser} from '../../actions/user_actions';
// import EventCard from './event_card';
// import { openModal, closeModal} from '../../actions/modal_actions';
// import { eventmembershipcheck } from '../../reducers/eventmembershipcheck';
// import { requestEventMembers } from '../../actions/event_member_actions.js';
// import { selectEventId } from '../../reducers/firsteventselector.js';
//
// const msp = (state) => {
//   return {
//     let eventId = selectEventId
//   event: state.entities.events[ownProps.match.params.eventId],
// }};
//
// const mdp = (dispatch) => ({
//   // requesteventmembers: () => dispatch(requestEventMembers()),
//   // requestEvent: () => dispatch(requestEvent(ownProps.match.params.eventId)),
//   // deleteEvent:() => dispatch(deleteEvent(ownProps.match.params.eventId)),
//   // createEventMember:(event_id, user_id) => dispatch(createEventMember(event_id,user_id)),
//   // deleteEventMember:(eventId, id) => dispatch(deleteEventMember(eventId,id)),
//   // getUser:(id)=> dispatch(getUser(id)),
// });
//
// export default connect(msp, mdp)(EventCard);
