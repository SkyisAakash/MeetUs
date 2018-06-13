import React from 'react';
import { connect } from 'react-redux';
import { createEvent, removeEveErrors } from '../../actions/event_actions';
import EventForm from './event_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state,ownProps) => ({
  event: {description:'', title:'',
          organizer_id:state.session.currentUser.id,
          image_url:"http://res.cloudinary.com/df4s95pqa/image/upload/v1528853972/No_Image_Available.jpg",
          address:'',group_id:ownProps.match.params.groupId,
          start_date:'',end_date:'',start_time:'',end_time:''},
          //have to pass group id
  formType: 'Create',
  currentUser: state.session.currentUser,
  errors: state.errors
});

const mdp = (dispatch,ownProps) => ({
  submitEvent: (event) => dispatch(createEvent(event)),
  removeEveErrors: () => dispatch(removeEveErrors())
});

export default connect(msp, mdp)(EventForm);
