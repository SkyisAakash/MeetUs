import React from 'react';
import { Link } from 'react-router-dom';


  class EventCard extends React.Component {

    componentDidMount() {
      this.props.getUser(this.props.event.organizer_id);
    }

    render() {

      if(!this.props.organizer){
        return null;
      }

      if (this.props.cardid === "big") {
          return(
                <div className="eventcard">
                  <p>Next Meetup</p>
                  <Link to={`/events/${this.props.event.id}`}
                          className="maincard">
                    <div className="minidate" id="cardminidate">
                        {this.datemethod(this.props.event.start_date, "block")}
                    </div>
                    <div className="cardmiddle">
                        <span className="dateline">
                          {this.datemethod(this.props.event.start_date,"line")}
                        </span>
                        <h1 className="eventcardShowTitle">
                            {this.props.event.title}
                        </h1>
                        <div className="eveorgan" id="cardorgan">
                            <i className="fas fa-user-tie" id="evecarduser"></i>
                            <h3 className="eveorgantext" id="cardtext">
                                Hosted by
                                <span className="evelinks">
                                    {this.props.organizer.username}
                                </span>
                            </h3>
                        </div>
                        <p id="carddata">{this.props.event.description}</p>
                    </div>
                    <div className="cardaddressdiv">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>{this.props.event.address}</p>
                    </div>
                </Link>
              </div>
          );
        }
        else if (this.props.cardid === "cute"){
          return(
              <Link to={`/events/${this.props.event.id}`}
                    className="cardtemplate">
                  <div className="cardtempminidate">
                    {this.datemethod(this.props.event.start_date, "block")}
                  </div>
                  <div className="cardtempright">
                      <span className="dateline">
                        {this.datemethod(this.props.event.start_date, "line")}
                      </span>
                      <h1 className="eventcardShowcuteTitle">
                        {this.props.event.title}
                      </h1>
                  </div>
              </Link>
          );
    }
  }


  datemethod(sdate, method) {
      let object = sdate + "T10:10:10Z";
      let date = new Date(object);
      let day = date.getDay();
      let dayword = date.toLocaleString('en-us', {weekday: "long"});
      let shortmonth = date.toLocaleString('en-us', {month: "short"});
      let longmonth = date.toLocaleString('en-us', {month: "long"});
      let year = date.getFullYear();
      if (method==="line"){
        return <h5>{dayword}, {longmonth} {day}, {year}</h5>;
      }
      else {
        return <div className="dayblock"><p>{day}</p><p>{shortmonth}</p></div>;
      }
    }
}

export default EventCard;
