import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
});

const mapStateToProps = ({errors}) => {
  console.log(errors);
  return {
    errors: errors.session
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
