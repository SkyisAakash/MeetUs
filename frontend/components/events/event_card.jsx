import React from 'react';
import { Link } from 'react-router-dom';


  class EventCard extends React.Component {

    constructor(props) {
      super(props);
      this.state ={
        organizer:{}
      };
      // this.getOrganizer = this.getOrganizer.bind(this);
    }
    componentWillReceiveProps(newProps){
      this.setState({organizer:newProps.users[newProps.event.organizer_id]});
    }

    render(){
      return(
        <div className="eventheadleft">
          <span className="dateline">{this.datemethod(this.props.event.start_date, "line")}</span>
           <h1 className="eventShowTitle">{this.props.event.title}</h1>
           <div className="eveorgan">
                <i className="fas fa-user-tie" id="eveuser"></i>
                <div className="detailinfo">
                <h3 className="eveorgantext">Hosted by<span className="evelinks">{this.state.organizer.username}</span></h3>
                <h3 className="eveorgantext">From<Link to={`/groups/${this.props.event.group_id}`} className="evelinks" id="g">{this.props.groups[this.props.event.group_id].title}</Link></h3>
                <h3> Public group</h3>
                <p>{this.props.event.description}</p>
              </div>
           </div>
        </div>
      );
    }
}

export default EventCard;
