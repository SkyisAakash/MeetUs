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
    this.checkpos=this.checkpos.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
    this.firsteventcard = this.firsteventcard.bind(this);
  }

  componentWillMount() {
    this.props.requestEvents();
    this.props.requestgroupmembers();
  }

  componentDidMount() {
    this.props.requestGroup().then((res) => {
      this.props.getUser(res.group.organizer_id);
    });
    this.setState({
      memberships:this.props.membershipcheck,
      newEvent:this.props.selectEvent
    });
    this.groupoptions = this.groupoptions.bind(this);
    window.addEventListener('scroll', this.checkpos);

  }

  joinGroup() {
    this.props.createGroupMember(this.props.group.id,this.props.currentUser.id)
    .then(this.props.requestgroupmembers)
    .then(this.setState({
      memberships: "true"
    }));
  }

  leaveGroup() {
    let user_id = this.props.currentUser.id;
    let group_id = this.props.group.id;
    let object = {group_id, user_id};
    let hash = this.props.groupmemberships;
    let target = Object.keys(hash).filter(function(key) {
      return JSON.stringify(hash[key]) === JSON.stringify(object)})[0];
    let numtar = parseInt(target);

    this.props.deleteGroupMember(this.props.group.id,numtar)
    .then(this.props.requestgroupmembers)
    .then(this.setState({
      memberships: "false"
    }));
  }

  deleteGroup() {
    this.props.deleteGroup(this.props.group.id).then(() => {
      this.props.history.push(`/groups`);
    });
  }

  render(){
    if (this.props.loading) {
     return <section className="loading-detail"><LoadingIcon /></section>;
   }
    if (!this.props.group) {
      return null;
    }
    const cutebox =
      (this.props.laterEvents.length === 0)? "hidegroups" : "cuteblocks";
    const organizer = this.props.users[this.props.group.organizer_id];
    if(!organizer){
      return null;
    }
    const dotclass = this.state.pos+"dot";
    const { selectEvent } = this.props;
    return(
      <div className="groupshow">
        <div className="grouphead">
          <object data={this.props.group.image_url} type="image/png"
            className="groupimage">
            <img
              src="https://res.cloudinary.com/df4s95pqa/image/upload/v1528853972/No_Image_Available.jpg"
              id="grpshwimgobj" className="groupimage"/></object>
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
        <div className="joindeleteetc" id={`${this.state.pos}`}>
          <a className="extra">About</a>
          <a className="extra">Meetups</a>
          <a className="extra">Members</a>
          <a className="extra">Photos</a>
          <a className="extra">Discussions</a>
          <a className="extra">More</a>
          <div>{this.groupoptions()}</div>
          <div id={`${dotclass}`} className="dots">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <div className="bottombodygroup">
          {this.firsteventcard(organizer)}
          <div className="groupdes">
            <div className="description">
              <p>What we're about</p>
              <span class="justtext">{this.props.group.description}</span>
            </div>
            <div className={`${cutebox}`}>
              {this.eventtemplates(organizer)}
            </div>
          </div>
        </div>
      </div>
    );
  }


  firsteventcard(organizer){
    if(!this.props.selectEvent){
      return null;
    }
    return <EventCard cardid="big" event={this.props.selectEvent}
            organizer={organizer} getUser={this.props.getUser}/>;
  }

  eventtemplates(organizer){
    if(this.props.laterEvents.length === 0){
      return null;
    }
    return this.props.laterEvents.map((laterevent) => (
    <EventCard cardid="cute" event={laterevent} organizer={organizer}
            getUser={this.props.getUser}/>
    )
  );
}

  guestoptions(){
    const forguest = (this.props.membershipcheck === "true") ? (
      <div  className="joingroup">
        <button onClick={()=>this.leaveGroup(this.props.group.id)}
          className="groupoptions">Leave Group</button>
      </div>
    ) : (
      <div  className="joingroup">
        <button onClick={()=>this.joinGroup(this.props.group.id)}
          className="groupoptions">Join Group</button>
      </div>
    );
    return forguest;
  }

  groupoptions() {
    const deletebtn =
      (this.props.currentUser.id === this.props.group.organizer_id) ?
      (
        <div className="op">
          <Link to={`/groups/${this.props.group.id}/edit`}
            className="groupoptions" id="editgrp">Edit</Link>
          <button onClick={()=>this.deleteGroup()}
            className="groupoptions">Delete</button>
          <Link to={`/${this.props.group.id}/events/create`}
            className="groupoptions" id="editgrp">Create an Event</Link>
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
