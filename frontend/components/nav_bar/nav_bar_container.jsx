import React from 'react';
import {connect} from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { createGroup } from '../../actions/group_actions.js';
import { openModal, closeModal} from '../../actions/modal_actions';



const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
