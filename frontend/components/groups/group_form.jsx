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
  this.props.removegrpErrors();
}
handleInput(field) {
  return (e) => (
    this.setState({[field]:e.target.value})
  );
}
// renderErrors() {
// return(
//   <ul>
//     {this.props.errors.map((error, i) => (
//       <li key={`error-${i}`}>
//         {error}
//       </li>
//     ))}
//   </ul>
// );
// }

submitform(e) {
e.preventDefault();
  this.props.submitGroup(this.state).then((payload) => {

    console.log("-------------------");

    // debugger
    console.log(payload.group.id);
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

  render () {
    // debugger
    if (!this.props.group) {
      return null;
    }

    let name=this.props.formType+ " Group";
    return (
      <div className="groupformcon">
        <h1 className="groupformHead">{this.props.formType} your group</h1>
<form onSubmit={(e)=>this.submitform(e)} className="formlogin grpform">
  <p className="logininfo">Title:</p>
  <input type="string" value={this.state.title} onChange={this.handleInput('title')} className="inputField" placeholder="Enter title of group" id="querygf"/>
  <p className="logininfo">Description:</p>
<textarea value={this.state.description} onChange={this.handleInput('description')} className="inputField" placeholder="Enter thorough description of group" id="querygfar"/>
<p className="logininfo">Image:</p>
<input type="string" onChange={this.handleInput('image_url')} className="inputField"  placeholder="Type URL or upload image" id="querygf"/>
  <div className="imprev"> <object data={this.state.image_url} type="image/png" class="sampleImage"> <img src="https://s26.postimg.cc/7c57ixvuh/image-not-found.jpg" id="imgobj" className="sampleImage"/></object></div>

<button onClick={this.upload} className="uploadimage" id="gf">Upload Image</button>
<input type="submit" value={name} className="loginb" id="gf"/>
</form>
      </div>
    );
  }
}
//  <span className="errors">{this.renderErrors()}</span>//line 74

export default withRouter(GroupForm);
