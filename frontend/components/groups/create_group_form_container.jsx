import React from 'react';
import { connect } from 'react-redux';
import { createGroup, removegrpErrors } from '../../actions/group_actions';
import GroupForm from './group_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state,ownProps) => ({
  group: {description:'', title:'', organizer_id:state.session.currentUser.id, image_url:"https://s26.postimg.cc/i2sdl8ktl/group.jpg"},
  formType: 'Create',
  currentUser: state.session.currentUser,
  errors: state.errors.group
});

const mdp = (dispatch,ownProps) => ({
  submitGroup: (group) => dispatch(createGroup(group)),
  removegrpErrors: () => dispatch(removegrpErrors()),
  requestGroup:() => {}
});

export default connect(msp, mdp)(GroupForm);
