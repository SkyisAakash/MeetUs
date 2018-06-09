import React from 'react';
import { Link } from 'react-router-dom';

// import findKey from 'lodash/keys';


class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.joinEvent = this.joinEvent.bind(this);
    this.state ={
      organizer:{}
    };
    this.getOrganizer = this.getOrganizer.bind(this);
    this.checkpos=this.checkpos.bind(this);

    // this.guestoptions = this.guestoptions.bind(this);
    this.leaveEvent = this.leaveEvent.bind(this);
  }

  componentWillMount() {

  }
  getOrganizer(event){
    // let users = this.props.users;
    // debugger
  }
  componentWillReceiveProps(newProps){
    // debugger
    // if (newProps.users[newProps.event.organizer_id]){//comment thie
    this.setState({organizer:newProps.users[newProps.event.organizer_id]});
  // } else {//comment thie
    // this.setState({organizer:newProps.currentUser});//comment thie
  // }
    // debugger
  }
  componentDidMount() {
    this.props.requestEvent().then(
      res => (this.getOrganizer(res.event))
    );
    // var that=thi
    this.setState({
      memberships:this.props.membershipcheck
    });
    this.eventoptions = this.eventoptions.bind(this);
    window.addEventListener('scroll', this.checkpos);

  }
  // getOrganizer(event){
  //   let users = this.props.users;
  //   // debugger
  //   this.setState({organizer:this.props.users[this.props.event.organizer_id]});
  // }
  // componentWillReceiveProps(){
  //
  // }
  // componentDidMount() {
  //   this.props.requestEvent().then(
  //     res => (this.getOrganizer(res.event))
  //   );
  //   // var that=thi
  //   this.setState({
  //     memberships:this.props.membershipcheck
  //   });
  //   this.eventoptions = this.eventoptions.bind(this);
  // }

  joinEvent() {
    this.props.createEventMember(this.props.event.id,this.props.currentUser.id).then(this.props.requesteventmembers)
    .then(this.setState({
      memberships: "true"
    }));//.then(this.props.history.push(`/events/${this.props.event.id}`));
  }

  leaveEvent() {
    let user_id = this.props.currentUser.id;
    let event_id = this.props.event.id;
    let object = {event_id, user_id};
    let hash = this.props.eventmemberships;
    // debugger
    let target = Object.keys(hash).filter(function(key) {return JSON.stringify(hash[key]) === JSON.stringify(object)})[0];
    let numtar = parseInt(target)
    // let target = findKey(this.props.eventmemberships, object);
    // let target1 = findKey(this.props.eventmemberships, {event_id: 1, user_id: 1});
    // debugger
    this.props.deleteEventMember(this.props.event.id,numtar).then(this.props.requesteventmembers)
    .then(this.setState({
      memberships: "false"
    }));//.then(this.props.history.push(`/events/${this.props.event.id}`));
  }

//   getKeyByValue( hash,value ) {
//     debugger
//     for( var prop in hash ) {
//       debugger
//         if( hash.hasOwnProperty( prop ) ) {
//           debugger
//              if( hash[ prop ] === value )
//              debugger
//                  return prop;
//         }
//     }
// }

  deleteEvent() {
    this.props.deleteEvent(this.props.event.id).then(() => {
      this.props.history.push(`/events`);
    });
  }

  render(){
    if (!this.props.event) {
      return null;
    }

    return(
      <div className="eventshow">
        <div className="eventhead">
          <img src={this.props.event.image_url} className="eventimage" alt="wrong url"/>
          <div className="righttitle">
            <p className="eventShowTitle">{this.props.event.title}</p>
            <div className="organ">
              <i class="fas fa-user-tie" id="grpuser"></i>
              <div className="organtext">
              <h3>Organized by:</h3>
              <h2>{this.state.organizer.username}</h2>
              </div>
          </div>
          </div>
        </div>
        <div className={`joindeleteetc ${this.state.pos}`}>
          <a href="" className="extra">About</a>
          <a href="" className="extra">Meetups</a>
          <a href="" className="extra">Members</a>
          <a href="" className="extra">Photos</a>
          <a href="" className="extra">Discussions</a>
          <a href="" className="extra">More</a>
          <div>{this.eventoptions()}</div>
      <div className="dots"><i class="fas fa-ellipsis-h"></i></div>
        </div>
        <div className="eventdes">
          <p>What we're about</p>
          {this.props.event.description}
        </div>
      </div>
    );
  }

  guestoptions(){
    const forguest = (this.state.memberships === "true") ? (
      <div  className="joinevent">
        <button onClick={()=>this.leaveEvent(this.props.event.id)} className="eventoptions">Leave Event</button>
      </div>
    ) : (
      <div  className="joinevent">
        <button onClick={()=>this.joinEvent(this.props.event.id)} className="eventoptions">Join Event</button>
      </div>
    );
    return forguest;
  }

  eventoptions() {
    // debugger
    const deletebtn = (this.props.currentUser.id == this.props.event.organizer_id) ?
    (<div className="op">
    <Link to={`/events/${this.props.event.id}/edit`} className="eventoptions" id="editgrp">Edit</Link>
    <button onClick={()=>this.deleteEvent()} className="eventoptions">Delete</button>
    </div>
    ) : (
      <div>{this.guestoptions()}</div>
    );
   return deletebtn;
  }

checkpos(e) {
  if (document.scrollingElement.scrollTop > 470) {
    this.setState({
      pos: 'stopmovinggrp',
    });
  } else {
    this.setState({
      pos: '',
    });
  }
}

}
export default EventShow;
