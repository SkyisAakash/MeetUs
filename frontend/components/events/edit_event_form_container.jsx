import React from 'react';
import { connect } from 'react-redux';
import { requestEvent, updateEvent } from '../../actions/event_actions';
import EventForm from './event_form';
import { openModal, closeModal } from '../../actions/modal_actions';

class EditEventForm extends React.Component {

  componentDidMount() {
    this.props.requestEvent();
  }

  render () {
    const { event, formType, submitEvent, currentUser } = this.props;
    return (
      <EventForm
        event={event}
        formType={formType}
        submitEvent={submitEvent}
        currentUser={currentUser} />
    );
  }
}

const msp = (state,ownProps) => ({
  event: state.entities.events[ownProps.match.params.eventId],
  formType: 'Edit',
  currentUser: state.session.currentUser
});

const mdp = (dispatch,ownProps) => ({
  submitEvent: (event) => dispatch(updateEvent(event)),
  requestEvent: () => dispatch(requestEvent(ownProps.match.params.eventId)),
});

export default connect(msp, mdp)(EditEventForm);
