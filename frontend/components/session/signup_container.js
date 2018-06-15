
import { connect } from 'react-redux';
import { login, signup, removeErrors } from '../../actions/session_actions';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  createNewUser: formUser => dispatch(signup(formUser)),
  removeErrors: () => dispatch(removeErrors())
});

const mapStateToProps = ({errors}) => {
  // console.log(errors);
  return {
    errors: errors.session
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
