import React from 'react';
import EventIndexItem from './event_index_item';
import { Link } from 'react-router-dom';
import SearchBox from '../groups/search_box';

class EventIndex extends React.Component {
  //
  // myFunction(sticky, header) {
  //   if (window.pageYOffset >= sticky) {
  //     header.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  // }

  constructor(props){
    // debugger
    super(props);
    this.state ={
      myEvents:props.memberEvents
    };
    this.awe = this.awe.bind(this);
  }
  componentDidMount() {
    this.props.getusers();
    this.props.requestEvents();
    this.props.requestGroups();
    this.props.requesteventmembers();
    // debugger
  }
  // ownEvents(){
  //   // debugger
  //   return this.state.myEvents.map((event)=>{
  //     // debugger
  //   return <EventIndexItem event={event} key={event.id} users={this.props.users} groups={this.props.groups} currentUser={this.props.currentUser}/>;
  //   });
  // }
  //

  componentWillReceiveProps(nextProps){
    // debugger
    this.setState({
      myEvents:nextProps.memberEvents
    });
  }

  checkifempty(obj) {
    return JSON.stringify(obj) === JSON.stringify([]);
  }

  awe(){
    // debugger
    if (this.checkifempty(this.props.events) === true) {
      // debugger
      return <p className="awe">No matching event enties found</p>;
      }
  }
  // your events
  // {this.ownEvents()}
  // more events
  // on line 69 70 71
  render() {
    // debugger
    // console.log(this.state.myEvents);
    const moreevents = (this.props.events.length > 0) ? "showevents" : "hidegroups";
    const yourevents = (this.state.myEvents.length > 0) ? "showevents" : "hidegroups";
    return (
      <div>
      <div id="myHeader">
        <SearchBox requestItems={this.props.requestEvents} searchtype="event"/>
      </div>
      {this.awe()}
      <div className="indexbody">
    <ul className="eventIndex">
      <p className={`${yourevents}`}>Your Meetus Events</p>

    {this.props.events.map((event) => {
      return  <EventIndexItem event={event} key={event.id} users={this.props.users} groups={this.props.groups} currentUser={this.props.currentUser}/>;
    })}
    </ul>
    <ul className="eventIndex">
      <p className={`${moreevents}`}>More Meetus Events</p>

    {this.state.myEvents.map((event) => {
      return  <EventIndexItem event={event} key={event.id} users={this.props.users} groups={this.props.groups} currentUser={this.props.currentUser}/>;
    })}
    </ul>


    </div>
    </div>
    );
  }
}

export default EventIndex;
