import React from 'react';
import { withRouter } from 'react-router-dom';
import UploadButton from '../uploadbutton.jsx';

class EventForm extends React.Component {
constructor(props) {
  super(props);
  this.state = this.props.event;
  this.handleInput = this.handleInput.bind(this);
  this.submitform = this.submitform.bind(this);
  this.addImage = this.addImage.bind(this);
  this.upload = this.upload.bind(this);
}

componentDidMount() {
  this.props.removeEveErrors();
}
componentWillReceiveProps(newProps){
  this.setState({
    address:newProps.event.address,
    description:newProps.event.description,
    end_date:newProps.event.end_date,
    end_time:newProps.event.end_time,
    group_id:newProps.event.group_id,
    organizer_id:newProps.event.organizer_id,
    start_date:newProps.event.start_date,
    start_time:newProps.event.start_time,
    title:newProps.event.title,
    image_url:newProps.event.image_url,
    id:newProps.event.id
  });
}

handleInput(field) {
  return (e) => {
    return this.setState({[field]:e.target.value});
  };
}

submitform(e) {
e.preventDefault();
  this.props.submitEvent(this.state).then((payload) => {
    this.props.history.push(`/events/${payload.event.id}`);
  });

}

addImage(image){
  this.setState({image_url: image});
}

upload(e) {
  e.preventDefault();
  let that = this;
  window.cloudinary.openUploadWidget(window.CLOUDINARY_OPTIONS, (errors, results) => {
    if (errors === null) {
           this.addImage(results[0].secure_url);}
         });
}

renderErrors() {
    if (!this.props.errors.events){return null;}
    if (this.props.errors === {}){return null;}
    return(
      <ul className="grperrors">
        {this.props.errors.events.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
}

render () {
  const todaysdate = new Date().toISOString().split("T")[0];
  // debugger
    if (!this.props.event) {
      return null;
    }
    let name=this.props.formType+ " Event";
    return (
      <div className="groupformcon">
        <h1 className="groupformHead">
          {this.props.formType} your event
        </h1>
        <form onSubmit={this.submitform} className="formlogin grpform">
          <p className="grplogininfo">Title:</p>
          <input type="string" value={this.state.title}
                 onChange={this.handleInput('title')} className="inputField"
                 placeholder="Enter title of event" id="querygf"/>
          <p className="grplogininfo">Description:</p>
          <textarea value={this.state.description}
             onChange={this.handleInput('description')}
             className="inputField"
             placeholder="Enter thorough description of event"
             id="querygfar"/>
             <p className="grplogininfo">Address:</p>
             <input type="string" value={this.state.address}
                    onChange={this.handleInput('address')}
                    className="inputField"
                    placeholder="Enter address of event"
                    id="querygf"/>
              <p className="grplogininfo">Start Date:</p>
              <input type="date"  id="calen"
                     value={this.state.start_date}
                     min={todaysdate}
                     onChange={this.handleInput('start_date')}/>
               <p className="grplogininfo">End Date:</p>
               <input type="date" id="calen"
                      value={this.state.end_date}
                      min={this.state.start_date}
                      onChange={this.handleInput('end_date')}
                      />
                <p className="grplogininfo">Start Time:
                </p>
                <input type="time" id="calen"
                       value={this.state.start_time}
                       onChange={this.handleInput('start_time')}/>
                <p className="grplogininfo">End Time:
                </p>
                 <input type="time" id="calen"
                   value={this.state.end_time}
                   min={this.state.start_time}
                   onChange={this.handleInput('end_time')}
                   className="eventtime"/>
                 <div className="imprev">
                   <object data={this.state.image_url}
                     type="image/png"
                     className="sampleImage">
                     <img src="https://res.cloudinary.com/df4s95pqa/image/upload/v1528853972/No_Image_Available.jpg"
                       id="imgobj"
                       className="sampleImage"/>
                   </object>
                 </div>
                 <span className="errors">
                   {this.renderErrors()}
                 </span>
                 <button onClick={this.upload}
                   className="uploadimage"
                   id="gf">Upload Image</button>
                 <input type="submit"
                   value={name}
                   className="loginb" id="gf"/>
               </form>
             </div>
           );
         }
}

export default withRouter(EventForm);
