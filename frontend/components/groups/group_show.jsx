import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../events/event_card';
import findKey from 'lodash/keys';
import LoadingIcon from '../loading_icon';


class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.joinGroup = this.joinGroup.bind(this);
    this.state ={
      pos:""
    };
    // this.getOrganizer = this.getOrganizer.bind(this);
    this.checkpos=this.checkpos.bind(this);

    // this.guestoptions = this.guestoptions.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
    this.firsteventcard = this.firsteventcard.bind(this);
  }

  componentWillMount() {
    this.props.requestEvents();
  }
  // getOrganizer(group){
    // let users = this.props.users;
    // debugger
  // }
  // componentWillReceiveProps(newProps){
    // debugger
    // if (newProps.users[newProps.group.organizer_id]){//comment thie
    // this.setState({organizer:newProps.users[newProps.group.organizer_id]});
    // this.props.requestGroup().then(
    // this.setState({organizer:newProps.users[newProps.group.organizer_id]}))
  // } else {//comment thie
    // this.setState({organizer:newProps.currentUser});//comment thie
  // }
    // debugger
  // }
  componentDidMount() {
    this.props.requestGroup().then((res) => {
      // debugger
      this.props.getUser(res.group.organizer_id);
    });
    this.setState({
      memberships:this.props.membershipcheck,
      newEvent:this.props.selectEvent
    });
    this.groupoptions = this.groupoptions.bind(this);
    window.addEventListener('scroll', this.checkpos);

  }
  // getOrganizer(group){
  //   let users = this.props.users;
  //   // debugger
  //   this.setState({organizer:this.props.users[this.props.group.organizer_id]});
  // }
  // componentWillReceiveProps(){
  //
  // }
  // componentDidMount() {
  //   this.props.requestGroup().then(
  //     res => (this.getOrganizer(res.group))
  //   );
  //   // var that=thi
  //   this.setState({
  //     memberships:this.props.membershipcheck
  //   });
  //   this.groupoptions = this.groupoptions.bind(this);
  // }

  joinGroup() {
    this.props.createGroupMember(this.props.group.id,this.props.currentUser.id).then(this.props.requestgroupmembers)
    .then(this.setState({
      memberships: "true"
    }));//.then(this.props.history.push(`/groups/${this.props.group.id}`));
  }

  leaveGroup() {
    let user_id = this.props.currentUser.id;
    let group_id = this.props.group.id;
    let object = {group_id, user_id};
    let hash = this.props.groupmemberships;
    // debugger
    let target = Object.keys(hash).filter(function(key) {return JSON.stringify(hash[key]) === JSON.stringify(object)})[0];
    let numtar = parseInt(target);
    // let target = findKey(this.props.groupmemberships, object);
    // let target1 = findKey(this.props.groupmemberships, {group_id: 1, user_id: 1});
    // debugger
    this.props.deleteGroupMember(this.props.group.id,numtar).then(this.props.requestgroupmembers)
    .then(this.setState({
      memberships: "false"
    }));//.then(this.props.history.push(`/groups/${this.props.group.id}`));
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

  deleteGroup() {
    this.props.deleteGroup(this.props.group.id).then(() => {
      this.props.history.push(`/groups`);
    });
  }

  render(){
    if (this.props.loading) {
     return <section className="pokemon-detail"><LoadingIcon /></section>;
   }
    console.log(this.props.group);
    if (!this.props.group) {
      return null;
    }
    const cutebox = (this.props.laterEvents.length === 0)? "hidegroups" : "cuteblocks";
    const organizer = this.props.users[this.props.group.organizer_id];
    console.log(organizer);
    if(!organizer){
      return null;
    }
    const dotclass = this.state.pos+"dot";
    const { selectEvent } = this.props;
    return(
      <div className="groupshow">
        <div className="grouphead">
          <object data={this.props.group.image_url} type="image/png" className="groupimage"> <img src="https://s26.postimg.cc/7c57ixvuh/image-not-found.jpg" id="grpshwimgobj" className="groupimage"/></object>

          <div className="righttitle">
            <p className="groupShowTitle">{this.props.group.title}</p>
            <div className="organ">
              <i className="fas fa-user-tie" id="grpuser"></i>
              <div className="organtext">
              <h3>Organized by:</h3>
              <h2>{organizer.username}</h2>
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
          <div>{this.groupoptions()}</div>
          <div id={`${dotclass}`} className="dots"><i className="fas fa-ellipsis-h"></i></div>
        </div>
        {this.firsteventcard(organizer)}
        <div className="groupdes">
          <div className="description">
          <p>What we're about</p>
          {this.props.group.description}
          </div>
          <div className={`${cutebox}`}>
            {this.eventtemplates(organizer)}
          </div>
        </div>
      </div>
    );
  }
      // -----------{this.props.laterEvents.map((event) => (<p>{event.title}</p>))};
  firsteventcard(organizer){
    // debugger
    if(!this.props.selectEvent){
      return null;
    }
    return <EventCard cardid="big" event={this.props.selectEvent} organizer={organizer} getUser={this.props.getUser}/>;
  }
  eventtemplates(organizer){
    // debugger
    if(this.props.laterEvents.length === 0){
      return null;
    }
    // debugger
    return this.props.laterEvents.map((laterevent) => (
    <EventCard cardid="cute" event={laterevent} organizer={organizer} getUser={this.props.getUser}/>
    )
  );
}

  guestoptions(){
    const forguest = (this.state.memberships === "true") ? (
      <div  className="joingroup">
        <button onClick={()=>this.leaveGroup(this.props.group.id)} className="groupoptions">Leave Group</button>
      </div>
    ) : (
      <div  className="joingroup">
        <button onClick={()=>this.joinGroup(this.props.group.id)} className="groupoptions">Join Group</button>
      </div>
    );
    return forguest;
  }

  groupoptions() {
    // debugger
    const deletebtn = (this.props.currentUser.id == this.props.group.organizer_id) ?
    (<div className="op">
    <Link to={`/groups/${this.props.group.id}/edit`} className="groupoptions" id="editgrp">Edit</Link>
    <button onClick={()=>this.deleteGroup()} className="groupoptions">Delete</button>
    <Link to={`/${this.props.group.id}/events/create`} className="groupoptions" id="editgrp">Create an Event</Link>
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
export default GroupShow;
