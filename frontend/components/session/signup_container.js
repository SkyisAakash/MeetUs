
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(signup(formUser)),
});

export default connect(null, mapDispatchToProps)(Signup);
