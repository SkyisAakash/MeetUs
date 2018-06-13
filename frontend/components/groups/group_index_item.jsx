import React from 'react';
import { Link } from 'react-router-dom';

class GroupIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Link to={`/groups/${this.props.group.id}`} className="groupIndexLink">
      <li className="eachGroup">
        <object data={this.props.group.image_url} type="image/png"
          className="groupIndexImage">
          <img
            src="https://res.cloudinary.com/df4s95pqa/image/upload/v1528853972/No_Image_Available.jpg"
            id="grpidximgobj" className="groupIndexImage"/>
        </object>
        <div className="container">
          <div className="internalcontainer">
          <p className="groupIndexTitle">{this.props.group.title}</p>
        </div>
        </div>
      </li>
    </Link>
    );
  }
}


export default GroupIndexItem;
