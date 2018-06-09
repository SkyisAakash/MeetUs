import React from 'react';
import { withRouter } from 'react-router-dom';
import UploadButton from '../uploadbutton.jsx';

class GroupForm extends React.Component {
constructor(props) {
  super(props);
  this.state = this.props.group;
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

  this.props.submitGroup(this.state).then((payload) => {
    // debugger
    this.props.history.push(`/groups/${payload.group.id}`);
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
    if (!this.props.group) {
      return null;
    }
    let name=this.props.formType+ " Group";
    return (
      <div className="groupformcon">
        <h1 className="groupformHead">{this.props.formType} your group</h1>
<form onSubmit={()=>this.submitform()} className="formlogin grpform">
  <p className="logininfo">Title:</p>
  <input type="string" value={this.state.title} onChange={this.handleInput('title')} className="inputField" placeholder="Enter title of group" id="querygf"/>
  <p className="logininfo">Description:</p>
<textarea value={this.state.description} onChange={this.handleInput('description')} className="inputField" placeholder="Enter thorough description of group" id="querygfar"/>
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

export default withRouter(GroupForm);
