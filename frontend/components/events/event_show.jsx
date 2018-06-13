import React from 'react';
import { Link } from 'react-router-dom';
import Map from '../map.jsx';
// import findKey from 'lodash/keys';

// ReactDOM.render(
  // <Map center={mapCenter} burritoPlaces={burritos}/>,
  // document.getElementById('root')
// );
class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.joinEvent = this.joinEvent.bind(this);
    this.state ={
      // organizer:{}
    };
    // this.getOrganizer = this.getOrganizer.bind(this);
    this.checkpos=this.checkpos.bind(this);

    // this.guestoptions = this.guestoptions.bind(this);
    this.leaveEvent = this.leaveEvent.bind(this);
  }

  // componentDidMount() {
    // window.addEventListener('scroll', this.checkpos);
  // }
  // getOrganizer(event){
    // let users = this.props.users;
    // debugger
  // }
  // componentWillReceiveProps(newProps){
    // debugger
    // if (newProps.users[newProps.event.organizer_id]){//comment thie
    // this.setState({organizer:newProps.users[newProps.event.organizer_id]});
  // } else {//comment thie
    // this.setState({organizer:newProps.currentUser});//comment thie
  // }
    // debugger
  // }
  componentDidMount() {
    const that = this;
    this.props.requestEvent().then(
      res => {
        // debugger
        this.props.getUser(res.event.organizer_id);
        this.props.requestGroup(res.event.group_id);
      }
    );
    // var that=thi
    this.setState({
      memberships:this.props.membershipcheck,
      hiddenhead:"hidehiddenhead"
    });
    this.props.requesteventmembers();
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

  deleteEvent() {
    this.props.deleteEvent(this.props.event.id).then(() => {
      this.props.history.push(`/groups/${this.props.event.group_id}`);
    });
  }

  render(){
    // debugger
    if (!this.props.event || !this.props.groups[this.props.event.group_id]) {
      // debugger
      return null;
    }
    const organizer = this.props.users[this.props.event.organizer_id];
    // console.log(organizer);
    if(!organizer){
      return null;
    }
    // let geocoder = new google.maps.Geocoder();
    // let address = this.props.event.address;
    // let latitude;
    // let logitude;
    // geocoder.geocode({'address':address}, function(results) {
    //   let latitude = results[0].geometry.location.lat();
    //   let logitude = results[0].geometry.location.lng();
    // });
    // const mapCenter = { lat: latitude, lng: logitude };
    // I made some lat/lng points for some good burrito spots
    // const burritos = [
    //   { lat: 37.775785, lng: -122.445979, name: "Papalote" },
    //   { lat: 37.772045, lng: -122.437015, name: "The Little Chihuahua" },
    //   { lat: 37.781899, lng: -122.410426, name: "Cancun" }
    // ];
    // debugger
    return (
      <div className="eventshow">

        <div className="eventhead">
          <div className="showlittlehead" id={`${this.state.hiddenhead}`}>
            <div className="hiddentop">
              <div className="titledatehidden">
                <div className="minidate">{this.datemethod(this.props.event.start_date, "block")}</div>
                <div className="hiddentopleft">
                  <span className="dateline">{this.datemethod(this.props.event.start_date, "line")}</span>
                  <h1 className="eventShowTitle">{this.props.event.title}</h1>
                </div>
                </div>
                <div className="hiddentopright">
                {this.eventoptions()}
                </div>
            </div>
            <div className="hiddenbtm">
              <div className="eventbodyright" id="hiddenevebodyright">
                <div className="timediv">
                    <i className="far fa-clock"></i>
                    <div className="datetimeeve">
                    <p>{this.datemethod(this.props.event.start_date, "line")}</p>
                    <p>{this.timemethod(this.props.event.start_time)} to {this.timemethod(this.props.event.end_time)}</p>
                    </div>
                </div>
                <div className="addressdiv">
                  <i className="fas fa-map-marker-alt"></i>
                    <p>{this.props.event.address}</p>
                  </div>
              </div>

            </div>

          </div>
          <div className="minidate">{this.datemethod(this.props.event.start_date, "block")}</div>
          <div className="eventheaddata">
              <div className="eventheadleft">
                  <span className="dateline">{this.datemethod(this.props.event.start_date, "line")}</span>
                   <h1 className="eventShowTitle">{this.props.event.title}</h1>
                   <div className="eveorgan">
                        <i className="fas fa-user-tie" id="eveuser"></i>
                        <div className="detailinfo">
                        <h3 className="eveorgantext">Hosted by<span className="littlebold">{organizer.username}</span></h3>
                        <h3 className="eveorgantext">From<Link to={`/groups/${this.props.event.group_id}`} className="evelinks" id="g">{this.props.groups[this.props.event.group_id].title}</Link></h3>
                        <h3> Public group</h3>
                      </div>
                   </div>
                </div>
                <div className="eventheadright">
                  {this.eventoptions()}
                </div>
              </div>
        </div>

          <div className="eventbody">
            <div className="eventbodyleft">
              <object data={this.props.event.image_url} type="image/png" className="eveimage"> <img src="https://res.cloudinary.com/df4s95pqa/image/upload/v1528853972/No_Image_Available.jpg" id="evenotfound" className="eveimage"/></object>

              <div className="groupdes" id="evedes">
                  <p>Details</p>
                  {this.props.event.description}
              </div>
            </div>
            <div className="eventbodyright">
              <div id={`${this.state.pos}`}>
              <div className="timediv">
                  <i className="far fa-clock"></i>
                  <div className="datetimeeve">
                  <p>{this.datemethod(this.props.event.start_date, "line")}</p>
                  <p>{this.timemethod(this.props.event.start_time)} to {this.timemethod(this.props.event.end_time)}</p>
                  </div>
              </div>
              <div className="addressdiv">
                <i className="fas fa-map-marker-alt"></i>
                  <p>{this.props.event.address}</p>
                </div>
            </div>
          </div>
          </div>
        </div>
    );
  }

  checkpos(e) {
    if (document.scrollingElement.scrollTop > 300) {
      this.setState({
        pos: 'stopmovingeventbody',
        hiddenhead: 'showhiddenhead'
      });
    } else {
      this.setState({
        pos: '',
        hiddenhead: 'hidehiddenhead'
      });
    }
  }

  datemethod(sdate, method) {
    let object = sdate + "T10:10:10Z";
    let date = new Date(object);
    // debugger
    let day = date.getDay();
    let dayword = date.toLocaleString('en-us', {weekday: "long"});
    // let numarr = date.toDateString('en-us').match(/\w*/);
    // let num = numarr[0];
    let shortmonth = date.toLocaleString('en-us', {month: "short"});
    let longmonth = date.toLocaleString('en-us', {month: "long"});
    let year = date.getFullYear();
    // debugger
    if (method==="line"){
      return <h5>{dayword}, {longmonth} {day}, {year}</h5>;
    }
    else {
      return <div className="dayblock"><p>{day}</p><p>{shortmonth}</p></div>;
    }
  }

  timemethod(time){
    if(!time){
      return null;
    }
    // debugger
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
  // timemethod(time) {
  //   debugger
  //   let timest = new Date();
  //   timest.setTime(time);
  //   debugger
  //   var options = {
  //     hour: 'numeric',
  //     minute: 'numeric',
  //     hour12: true
  //   };
  //   var timeString = timest.toLocaleString('en-US', options);
  //   debugger
  //   return <h5>{timeString}</h5>;
  // }

  guestoptions(){
    // debugger
    const forguest = (this.props.eventmembershipcheck === "true") ? (
      <div className="attendence">
      <div className="gonogotext">You're going</div>
      <div  className="joinevent">
        <a href="" className="gonogo" id="activebtn">  <i className="fas fa-check" id="checknocheck"></i> </a>
        <button onClick={()=>this.leaveEvent(this.props.event.id)} className="gonogo" id="inactivebtn"> <i className="fas fa-times" id="checknocheck"></i> </button>
      </div>
      </div>
    ) : (
      <div className="attendence">
      <div className="gonogotext">Are you going?</div>
      <div  className="joinevent">
        <button onClick={()=>this.joinEvent(this.props.event.id)} className="gonogo" id="inactivebtn"><i className="fas fa-check" id="checknocheck"></i></button>
        <a href="" className="gonogo" id="activebtn">  <i className="fas fa-times" id="checknocheck"></i> </a>
      </div>
      </div>
    );
    return forguest;
  }

  eventoptions() {
    // debugger
    const deletebtn = (this.props.currentUser.id == this.props.event.organizer_id) ?
    (<div className="op">
    <Link to={`/events/${this.props.event.id}/edit`} className="groupoptions" id="editeve">Edit</Link>
    <button onClick={()=>this.deleteEvent()} className="groupoptions" id="">Delete</button>
    </div>
    ) : (
      <div>{this.guestoptions()}</div>
    );
   return deletebtn;
  }

// checkpos(e) {
//   if (document.scrollingElement.scrollTop > 470) {
//     this.setState({
//       pos: 'stopmovingeventbody',
//     });
//   } else {
//     this.setState({
//       pos: '',
//     });
//   }
// }

}
export default EventShow;
