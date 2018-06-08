import React from 'react';
import { Link } from 'react-router-dom';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.joinGroup = this.joinGroup.bind(this);
    this.state ={
      organizer:{}
    };
  }
  componentDidMount() {
    this.props.requestGroup().then(
      group => {
        const owner = this.props.getUser(this.props.group.organizer_id);
        // debugger
        this.setState({organizer:owner});
        // debugger
      }
    );
    this.groupoptions = this.groupoptions.bind(this);
  }

  joinGroup() {
    // debugger
    let old_ids=this.props.currentUser.group_ids;
    old_ids.push(this.props.group.id);
    let newUser = {username:this.props.currentUser.username,
                email:this.props.currentUser.email,
                id:this.props.currentUser.id,
              group_ids:old_ids};
            // debugger
    this.props.update(newUser);
  }

  deleteGroup() {
    // debugger
    this.props.deleteGroup(this.props.group.id).then(() => {
      // debugger
      this.props.history.push(`/groups`);
    });
  }
  render(){

    return(
      <div className="groupshow">
        <div className="grouphead">

          <img src={this.props.group.image_url} className="groupimage"/>
          <p className="groupShowTitle">{this.props.group.title}</p>
          {this.state.organizer.username}
        </div>
        <div className="joindeleteetc">
          <a href="" className="useless">About</a>
          <a href="" className="useless">Meetups</a>
          <a href="" className="useless">Members</a>
          <a href="" className="useless">Photos</a>
          <a href="" className="useless">Discussions</a>
          <a href="" className="useless">More</a>
          <div className="useless">{this.groupoptions()}</div>

        </div>
        <div className="groupdes">
          {this.props.group.description}
        </div>
      </div>
    );
  }

  groupoptions() {
    const deletebtn = (this.props.currentUser.id == this.props.group.organizer_id) ?
    (<div>
      // debugger
           <button onClick={() => openModal('login')}>Login</button>
    <Link to={`/groups/${this.props.group.id}/edit`}>Edit</Link>
    <button onClick={()=>this.deleteGroup()}>Delete</button>
    </div>
    ) : (
      <div  className="joingroup">
        <button onClick={()=>this.joinGroup(this.props.group.id)} className="joingroup">Join Group</button>
      </div>
    );
   return deletebtn;
  }
}

export default GroupShow;
