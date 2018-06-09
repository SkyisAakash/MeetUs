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
      myEvents:[]
    };
    this.awe = this.awe.bind(this);
  }
  componentDidMount() {
    this.props.getusers();
    this.props.requestEvents();
    this.props.requesteventmembers();
    // debugger
  }

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

  render() {
    // debugger
    // console.log(this.state.myEvents);
    return (
      <div id="myHeader">
        <SearchBox requestItems={this.props.requestEvents} searchtype="event"/>
    <ul className="eventIndex">
      {this.awe()}
    {this.props.events.map((event) => {
      return  <EventIndexItem event={event} key={event.id} currentUser={this.props.currentUser}/>;
    })}
    </ul>

    {this.state.myEvents.map((event)=>{
    return <p>{event.title}</p>;
    })}
  </div>
    );
  }
}

export default EventIndex;
