import React from 'react';
import { Link } from 'react-router-dom';

class HeadingBar extends React.Component {

  render() {

    return (
      <div className="headingdiv">
    <a href="">
      <h1>Let's Meetus</h1>
      <h2>1,071 Meetups nearby</h2>
    </a>
  </div>
    );
  }
}

export default HeadingBar;
