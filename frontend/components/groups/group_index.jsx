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
    this.awe = this.awe.bind(this);
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

  checkifempty(obj) {
    return JSON.stringify(obj) === JSON.stringify([]);
  }

  awe(){
    // debugger
    if (this.checkifempty(this.props.groups) === true) {
      // debugger
      return <p className="awe">No matching group enties found</p>;
      }
  }

  render() {
    // debugger
    // console.log(this.state.myGroups);
    return (
      <div id="myHeader">
        <SearchBox requestGroups={this.props.requestGroups} searchtype="group"/>
    <ul className="groupIndex">
      {this.awe()}
    {this.props.groups.map((group) => {
      return  <GroupIndexItem group={group} key={group.id} currentUser={this.props.currentUser}/>;
    })}
    </ul>

    {this.state.myGroups.map((group)=>{
    return <p>{group.title}</p>;
    })}
  </div>
    );
  }
}

export default GroupIndex;
