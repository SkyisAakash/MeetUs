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

  constructor(props){
    // debugger
    super(props);
    this.state ={
      myGroups:[]
    };
  }
  componentDidMount() {
    this.props.getusers();
    this.props.requestGroups();
    this.props.requestgroupmembers();
    // debugger
  }

  componentWillReceiveProps(nextProps){
    // debugger
    this.setState({
      myGroups:nextProps.memberGroups
    });
  }

  render() {
    // debugger
    // console.log(this.state.myGroups);
    return (
      <div id="myHeader">
        <SearchBox requestGroups={this.props.requestGroups} searchtype="group"/>
    <ul className="groupIndex">
    {this.props.groups.map((group) => {
      return  <GroupIndexItem group={group} key={group.id} currentUser={this.props.currentUser}/>;
    })}
    </ul>
    <Link to={`/groups/new`}>GroupForm</Link>
    {this.state.myGroups.map((group)=>{
    return <p>{group.title}</p>;
    })}
  </div>
    );
  }
}

export default GroupIndex;
