import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session/signup_container';


const Video = () => {
  return (
    <div className="videobox">
    <video className="video" autoPlay loop>
    <source src="https://www.meetup.com/mu_static/en-US/dddafbfe4574fc19c6718950691dcb78.mp4" type="video/mp4"/>
    Your browser does not support the video tag.
    </video>

  <div className="videoText">
    <p className="videotextheader">What do you love?</p>
    <p className="videotextdata">Do more of it with Meetup</p>
    <Link to="/signup" className="loginb signup videosignup"><span class="videobuttontext">Sign Up</span></Link>
  </div>
  </div>);
};

export default Video;
