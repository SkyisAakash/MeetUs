
import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {

const display = currentUser ? (
    <div>
      <div id="gear-dropdown-btn">
				<i className="fas fa-user-circle"></i>
        </div>
          <ul id="gear-dropdown" className="gear-dropdown hidden">
    			<li><a href="#">Profile</a></li>
    			<li><a href="#">Settings</a></li>
    			<li><a href="#" onClick={logout}>Logout</a></li>
    		  </ul>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div className="buttons">
      <Link className="btn" to="/login">Log in</Link>
      <Link className="btn" to="/signup">Sign up</Link>
    </div>
  );
  return (
    <header className="nav-bar">
      <Link to="/"><img className="logo" src="https://s26.postimg.cc/eur407edl/meetus_logo.png"/></Link>
      <div className="rightSideNav">
        <a href="" className="startGroup">Start a new group</a>
        {display}
      </div>
    </header>
  );
};
