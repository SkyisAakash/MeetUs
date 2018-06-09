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
      console.log("--------------------------------");
           this.addImage(results[0].secure_url);}
         });
}

  render () {
    if (!this.props.group) {
      return null;
    }
    return (
      <div>
           <div onClick={this.props.closeModal} className="close-x">X</div>
<form onSubmit={()=>this.submitform()}>
<input type="text" value={this.state.description} onChange={this.handleInput('description')}/>
<input type="string" value={this.state.title} onChange={this.handleInput('title')}/>
<input type="string" value={this.state.image_url} onChange={this.handleInput('image_url')}/>
<input type="submit" value="edit"/>
</form>
<button onClick={this.upload}>Upload Image</button>
      </div>
    );
  }
}

export default withRouter(GroupForm);
