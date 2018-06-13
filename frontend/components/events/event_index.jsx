import React from 'react';
import EventIndexItem from './event_index_item';
import { Link } from 'react-router-dom';
import SearchBox from '../groups/search_box';

class EventIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      myEvents:props.memberEvents,
      otherEvents: props.otherEvents
    };
    this.awe = this.awe.bind(this);
  }

  componentDidMount() {
    this.props.getusers();
    this.props.requestEvents();
    this.props.requestGroups();
    this.props.requesteventmembers();
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      myEvents:nextProps.memberEvents,
      otherEvents:nextProps.otherEvents
    });
  }

  checkifempty(obj) {
    return JSON.stringify(obj) === JSON.stringify([]);
  }

  awe(){
    if (this.checkifempty(this.props.events) === true) {
      return <p className="awe">No matching event enties found</p>;
      }
  }

  render() {
    const moreevents = (this.state.otherEvents.length > 0) ?
      "showevents" : "hidegroups";
    const yourevents = (this.state.myEvents.length > 0) ?
      "showevents" : "hidegroups";
    return (
      <div>
        <div id="myHeader">
          <SearchBox requestItems={this.props.requestEvents}
            searchtype="event"/>
        </div>
        {this.awe()}
        <div className="indexbody">
          <ul className="eventIndex">
            <p className={`${yourevents}`}>Your MeetUs Events</p>
            {this.state.myEvents.map((event) => {
              return  <EventIndexItem event={event} key={event.id}
                users={this.props.users} groups={this.props.groups}
                currentUser={this.props.currentUser}/>;
            })}
          </ul>
          <ul className="eventIndex">
            <p className={`${moreevents}`}>MeetUs Events you can attend</p>
            {this.state.otherEvents.map((event) => {
              return  <EventIndexItem event={event} key={event.id}
                users={this.props.users} groups={this.props.groups}
                currentUser={this.props.currentUser}/>;
            })}
          </ul>
        </div>
    </div>
    );
  }
}

export default EventIndex;
