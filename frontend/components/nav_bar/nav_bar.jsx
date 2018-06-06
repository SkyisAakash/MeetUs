
import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="nav-bar">
        <Link to="/"><img className="logo" src="https://s26.postimg.cc/eur407edl/meetus_logo.png"/></Link>
        <div className="rightSideNav">
          <a href="" className="startGroup">Start a new group</a>
          {this.display()}
        </div>
      </header>
    );
  }

  display() {
  const display = this.props.currentUser ? (
      <div>
        <div id="gear-dropdown-btn">
  				<i className="fas fa-user-circle"></i>
          </div>
            <ul id="gear-dropdown" className="gear-dropdown hidden">
      			<li><a href="#">Profile</a></li>
      			<li><a href="#">Settings</a></li>
      			<li><a href="#" onClick={this.props.logout}>Logout</a></li>
      		  </ul>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    ) : (
      <div className="buttons">
        <Link className="btn" to="/login">Log in</Link>
        <Link className="btn" to="/signup">Sign up</Link>
      </div>
    );
    return display;
  }
}
export default NavBar;
