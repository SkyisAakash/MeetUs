import React from 'react';
import { Link } from 'react-router-dom';


class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.joinGroup = this.joinGroup.bind(this);
    this.state ={
      organizer:{}
    };
    this.getOrganizer = this.getOrganizer.bind(this);
  }

  componentWillReceiveProps(nextProps){
    // debugger
    this.setState({
      memberships:nextProps.membershipcheck
    });
  }

  getOrganizer(group){
    let users = this.props.users;
    this.setState({organizer:this.props.users[this.props.group.organizer_id]});
  }
  componentDidMount() {
    // var that=this;
    this.props.requestGroup().then(
      res => (this.getOrganizer(res.group))
    );

    this.groupoptions = this.groupoptions.bind(this);
  }

  joinGroup() {
    this.props.createGroupMember(this.props.group.id,this.props.currentUser.id);
  }

  deleteGroup() {
    this.props.deleteGroup(this.props.group.id).then(() => {
      this.props.history.push(`/groups`);
    });
  }

  render(){
    if (!this.props.group) {
      return null;
    }

    return(
      <div className="groupshow">
        <div className="grouphead">

          <img src={this.props.group.image_url} className="groupimage" alt="wrong url"/>
          <p className="groupShowTitle">{this.props.group.title}</p>
          uauuuuuuu{this.state.organizer.username}yyayyy
        </div>
        <h1>{this.state.memberships}</h1>
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
