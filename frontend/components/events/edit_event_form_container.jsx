import React from 'react';
import { connect } from 'react-redux';
import { requestEvent, updateEvent, removeEveErrors } from '../../actions/event_actions';
import EventForm from './event_form';
import { openModal, closeModal } from '../../actions/modal_actions';

class EditEventForm extends React.Component {

  componentDidMount() {
    this.props.requestEvent();
  }

  render () {
    const { event, formType, submitEvent, currentUser, errors } = this.props;
    return (
      <EventForm
        event={event}
        formType={formType}
        submitEvent={submitEvent}
        currentUser={currentUser}
        errors={errors}
        removeEveErrors={removeEveErrors}/>
    );
  }
}

const msp = (state,ownProps) => {
  // debugger
  return ({

  event: state.entities.events[ownProps.match.params.eventId],
  formType: 'Edit',
  currentUser: state.session.currentUser,
  errors: state.errors
});};

const mdp = (dispatch,ownProps) => ({
  submitEvent: (event) => dispatch(updateEvent(event)),
  requestEvent: () => dispatch(requestEvent(ownProps.match.params.eventId)),
  removeEveErrors: () => dispatch(removeEveErrors)
});

export default connect(msp, mdp)(EditEventForm);
