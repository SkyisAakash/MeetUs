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
handleInput(field) {
  // debugger
  return (e) => {
    // debugger
    return this.setState({[field]:e.target.value});
  };
}

submitform(e) {
e.preventDefault();
  this.props.submitEvent(this.state).then((payload) => {
    // console.log("-------------------");
    // debugger
    // console.log(payload.event.id);
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
  // debugger
    if (!this.props.errors.events){return null;}
    if (this.props.errors === {}){return null;}
    // debugger
return(
  <ul className="grperrors">
    {this.props.errors.map((error, i) => (
      <li key={`error-${i}`}>
        {error}
      </li>
    ))}
  </ul>
);
}
// <p className="grplogininfo">Image:</p>
// <input type="string" onChange={this.handleInput('image_url')} className="inputField"  placeholder="Type URL or upload image" id="querygf"/>

  render () {
    if (!this.props.event) {
      return null;
    }
    let name=this.props.formType+ " Event";
    return (
      <div className="groupformcon">
        <h1 className="groupformHead">{this.props.formType} your event</h1>
<form onSubmit={this.submitform} className="formlogin grpform">
  <p className="grplogininfo">Title:</p>
  <input type="string" value={this.state.title} onChange={this.handleInput('title')} className="inputField" placeholder="Enter title of event" id="querygf"/>
  <p className="grplogininfo">Description:</p>
<textarea value={this.state.description} onChange={this.handleInput('description')} className="inputField" placeholder="Enter thorough description of event" id="querygfar"/>
<p className="grplogininfo">Address:</p>
<input type="string" value={this.state.address} onChange={this.handleInput('address')} className="inputField" placeholder="Enter address of event" id="querygf"/>
<p className="grplogininfo" id="calen">Start Date:</p>
<input type="date"  id="calen" value={this.state.start_date} onChange={this.handleInput('start_date')}/>
<p className="grplogininfo">End Date:</p>
<input type="date" id="calen" value={this.state.end_date} min={this.state.start_date} onChange={this.handleInput('end_date')}/>
<p className="grplogininfo">Start Time:</p>
<input type="time" id="calen" value={this.state.start_time} onChange={this.handleInput('start_time')}/>
<p className="grplogininfo">End Time:</p>
<input type="time" id="calen" value={this.state.end_time} min={this.state.start_time} onChange={this.handleInput('end_time')} className="eventtime"/>

<div className="imprev"> <object data={this.state.image_url} type="image/png" className="sampleImage"> <img src="https://s26.postimg.cc/7c57ixvuh/image-not-found.jpg" id="imgobj" className="sampleImage"/></object></div>
<span className="errors">{this.renderErrors()}</span>


<button onClick={this.upload} className="uploadimage" id="gf">Upload Image</button>
<input type="submit" value={name} className="loginb" id="gf"/>

</form>
      </div>
    );
  }
}

export default withRouter(EventForm);
