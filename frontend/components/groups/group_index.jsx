import React from 'react';
import GroupIndexItem from './group_index_item';
import { Link } from 'react-router-dom';
import SearchBox from './search_box';

class GroupIndex extends React.Component {
  //
  // myFunction(sticky, header) {
  //   if (window.pageYOffset >= sticky) {
  //     header.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  // }

  componentDidMount() {
    // var header = document.getElementById("myHeader");
    // debugger
    // var sticky = header.offsetTop;
    // window.onscroll = function() {this.myFunction(sticky, header);};
  }

  render() {
    return (
      <div id="myHeader">
        <SearchBox requestGroups={this.props.requestGroups} searchtype="group"/>
    <ul className="groupIndex">
    {this.props.groups.map((group) => {
      return  <GroupIndexItem group={group} key={group.id} currentUser={this.props.currentUser}/>;
    })}
    </ul>
    <Link to={`/groups/new`}>GroupForm</Link>
  </div>
    );
  }
}

export default GroupIndex;
