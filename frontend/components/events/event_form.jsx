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


handleInput(field) {
  return (e) => (
    this.setState({[field]:e.target.value})
  );
}

submitform() {

  this.props.submitEvent(this.state).then((payload) => {
    console.log("-------------------");
    // debugger
    console.log(payload.event.id);
    this.props.history.push(`/events/${payload.event.id}`);
  }).then(this.props.closeModal);

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

  render () {
    if (!this.props.event) {
      return null;
    }
    let name=this.props.formType+ " Event";
    return (
      <div className="eventformcon">
        <h1 className="eventformHead">{this.props.formType} your event</h1>
<form onSubmit={()=>this.submitform()} className="formlogin grpform">
  <p className="logininfo">Title:</p>
  <input type="string" value={this.state.title} onChange={this.handleInput('title')} className="inputField" placeholder="Enter title of event" id="querygf"/>
  <p className="logininfo">Description:</p>
  <input type="string" value={this.state.address} onChange={this.handleInput('address')} className="inputField" placeholder="Enter address of event" id="querygf"/>
  <p className="logininfo">Address:</p>
<textarea value={this.state.description} onChange={this.handleInput('description')} className="inputField" placeholder="Enter thorough description of event" id="querygfar"/>
<p className="logininfo">Start Date:</p>
<input type="date" value={this.state.start_date} onChange={this.handleInput('date')}/>
<p className="logininfo">End Date:</p>
<input type="date" value={this.state.start_date} onChange={this.handleInput('date')}/>
<p className="logininfo">Start Time:</p>
<input type="time" value={this.state.start_time} onChange={this.handleInput('time')}/>
<p className="logininfo">End Time:</p>
<input type="time" value={this.state.start_time} onChange={this.handleInput('time')}/>
<p className="logininfo">Image:</p>
<input type="string" onChange={this.handleInput('image_url')} className="inputField"  placeholder="Type URL or upload image" id="querygf"/>
<div className="imprev"><img src={this.state.image_url} className="sampleImage" alt="Image Preview"/></div>
<button onClick={this.upload} className="uploadimage" id="gf">Upload Image</button>
<input type="submit" value={name} className="loginb" id="gf"/>
</form>
      </div>
    );
  }
}

export default withRouter(EventForm);
