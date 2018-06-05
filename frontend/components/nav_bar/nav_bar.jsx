
import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.username}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/login">Log In</Link>
      <Link className="btn" to="/signup">Sign Up</Link>
    </div>
  );
  return (
    <header className="nav-bar">
      <img className="logo" src="https://s26.postimg.cc/eur407edl/meetus_logo.png"/>
      <div>
        {display}
      </div>
    </header>
  );
};
