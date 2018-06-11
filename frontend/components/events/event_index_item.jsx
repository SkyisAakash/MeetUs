import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.groups[this.props.event.group_id]) {
      return null;
    }
              return(
                <li className="eachEvent">
                  <div className="indexeventdate">{this.datemethod(this.props.event.start_date)}</div>
                  <div className="container">
                    <div className="indexitemleft">
                      <Link to={`/events/${this.props.event.id}`} className="eventtime">{this.timemethod(this.props.event.start_time)}</Link>
                    </div>
                    <div className="indexitemright">
                    <Link to={`/groups/${this.props.event.group_id}`} className="eventgroupname">{this.props.groups[this.props.event.group_id].title}</Link>
                    <Link to={`/events/${this.props.event.id}`} className="eventIndexTitle">{this.props.event.title}</Link>
                    <p className="eventhostname">Hosted by: {this.props.users[this.props.event.organizer_id].username}</p>
                    </div>
                  </div>
                </li>
              );

  }

  timemethod(time) {
    let timest = new Date(time);
    var options = {hour: 'numeric',minute: 'numeric',hour12: true};
    var timeString = timest.toLocaleString('en-US', options);
    return <h5>{timeString}</h5>;
  }
  datemethod(sdate) {
    let object = sdate + "T10:10:10Z";
    let date = new Date(object);
    let day = date.getDay();
    let dayword = date.toLocaleString('en-us', {weekday: "long"});
    let shortmonth = date.toLocaleString('en-us', {month: "short"});
    let longmonth = date.toLocaleString('en-us', {month: "long"});
    // let year = date.getFullYear();
    return <h5>{dayword}, {longmonth} {day}</h5>;
  }
}


export default EventIndexItem;
