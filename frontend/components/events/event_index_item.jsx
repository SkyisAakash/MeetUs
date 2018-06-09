import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to={`/events/${this.props.event.id}`} className="eventIndexLink">
      <li className="eachEvent">
        <img src={this.props.event.image_url} className="eventIndexImage" alt="wrong url"/>
        <div className="container">
          <p className="eventIndexTitle">{this.props.event.title}</p>
        </div>
      </li>
    </Link>
    );
  }
}


export default EventIndexItem;
