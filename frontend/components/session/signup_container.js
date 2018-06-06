
import { connect } from 'react-redux';
import { signup, removeErrors } from '../../actions/session_actions';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(signup(formUser)),
  removeErrors: () => dispatch(removeErrors())
});

const mapStateToProps = ({errors}) => {
  console.log(errors);
  return {
    errors: errors.session
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
