import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session/signup_container';

const Video = () => {
  return (
    <div className="video">
    <video autoplay="" loop="">
      <source src="/mu_static/en-US/dddafbfe4574fc19c6718950691dcb78.mp4"/>
  </video>
  <div className="videoText">
    What do you love?
    Do more of it with Meetup
  </div>
  <SessionFormContainer />
  </div>);
};

export default Video;
