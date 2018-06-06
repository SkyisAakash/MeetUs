
import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.username}!</h3>
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
      <img className="logo" src="https://s26.postimg.cc/eur407edl/meetus_logo.png"/>
      <div className="rightSideNav">
        <a href="#" className="startGroup">Start a new group</a>
        {display}
      </div>
    </header>
  );
};
