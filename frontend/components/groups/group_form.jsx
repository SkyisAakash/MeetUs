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

componentDidMount() {
  this.props.requestGroup();
  this.props.removegrpErrors();

}

componentWillReceiveProps(newProps){
  this.setState({
    organizer_id:newProps.group.organizer_id,
    title:newProps.group.title,
    description:newProps.group.description,
    image_url:newProps.group.image_url
  });
}
handleInput(field) {
  return (e) => (
    this.setState({[field]:e.target.value})
  );
}
renderErrors() {
  // debugger
  if (!this.props.errors.group){return null;}
  if(!this.props.errors.group[0]){return null;}
return(
  <ul className="grperrors">
    {this.props.errors.group.map((error, i) => (
      <li key={`error-${i}`} className="grperritem">
        {error}
      </li>
    ))}
  </ul>
);
}

submitform(e) {
e.preventDefault();
  this.props.submitGroup(this.state).then((payload) => {

    // console.log("-------------------");

    // debugger
    // console.log(payload.group.id);
    this.props.history.push(`/groups/${payload.group.id}`);
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
// <p className="grplogininfo">Image:</p>//84
// <input type="string" onChange={this.handleInput('image_url')} className="inputField"  placeholder="Type URL or upload image" id="querygf"/>

  render () {
    // debugger
    if (!this.props.group) {
      return null;
    }
// debugger
  // const group = this.props.group;
    let name=this.props.formType+ " Group";
    return (
      <div className="groupformcon">
        <h1 className="groupformHead">{this.props.formType} your group</h1>
<form onSubmit={(e)=>this.submitform(e)} className="formlogin grpform">
  <p className="grplogininfo">Title:</p>
  <input type="string" value={this.state.title} onChange={this.handleInput('title')} className="inputField" placeholder="Enter title of group" id="querygf"/>
  <p className="grplogininfo">Description:</p>
<textarea value={this.state.description} onChange={this.handleInput('description')} className="inputField" placeholder="Enter thorough description of group" id="querygfar"/>

  <div className="imprev"> <object data={this.state.image_url} type="image/png" className="sampleImage"> <img src="http://res.cloudinary.com/df4s95pqa/image/upload/v1528853972/No_Image_Available.jpg" id="imgobj" className="sampleImage"/></object></div>
    <span className="errors">{this.renderErrors()}</span>
    <button onClick={this.upload} className="uploadimage" id="gf">Upload Image</button>
<input type="submit" value={name} className="loginb" id="gf"/>
</form>
      </div>
    );
  }
}

export default withRouter(GroupForm);
