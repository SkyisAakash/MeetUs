import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
class userProfile extends React.Component {
render() {
    return (<div className="userprofile">
  <div onClick={this.props.closeModal} id="close-x">
    <i className="fas fa-times"></i></div>
     <div className="user">
      <i className="fas fa-user-circle" id="userprofileicon"></i>
      <ul className="usertext">
        <li>
          Username: <span className="userinfo">{this.props.user.username}</span>
        </li>
        <li>
          Email-id: <span className="userinfo">{this.props.user.email}</span>
        </li>
      </ul>
    </div>
  </div>);
}
}

const msp = (state) => ({
  user: state.session.currentUser
});
const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
  });
export default connect(msp, mdp)(userProfile);
