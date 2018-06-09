import React from 'react';
import { withRouter } from 'react-router-dom';

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(window.CLOUDINARY_OPTIONS, (errors, images) => {
      if (errors === null) {
        console.log("--------------------------------");
      }
    });
  }

  render() {return (<button onClick={this.upload}>Upload Image</button>);}

}

export default UploadButton;
