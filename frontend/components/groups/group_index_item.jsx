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
        <img src={this.props.group.image_url} className="groupIndexImage"/>
        <div className="container">
          <p className="groupIndexTitle">{this.props.group.title}</p>
        </div>
      </li>
    </Link>
    );
  }

// group index link = group link
// each group = group container
// group index image = group image
// group index title = gradient h4
}


export default GroupIndexItem;
