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

  timemethod(time){
    // debugger
    if(!time){
      return null;
    }
    let hours = time.slice(11,13);
    let minutes = time.slice(14,16);
    let hr;
    let str;
    if (hours > 12) {
      hr = hours - 12;
      str = "PM";
    }
    else {
      hr = hours;
      str = "AM";
    }
    // debugger
    let timestring = hr+ ':' +minutes+ ' ' + str;
    // debugger
    return <h5>{timestring}</h5>;
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
