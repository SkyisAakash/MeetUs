import React from 'react';
import GroupIndexItem from './group_index_item';
import { Link } from 'react-router-dom';
import SearchBox from './search_box';

class GroupIndex extends React.Component {

  constructor(props){
    // debugger
    super(props);
    this.state ={
      myGroups:props.memberGroups,
      otherGroups: props.otherGroups
    };
    // this.ownGroups = this.ownGroups.bind(this);
    this.awe = this.awe.bind(this);
  }
  componentDidMount() {
    // debugger
    this.props.getusers();
    this.props.requestGroups();
    this.props.requestgroupmembers();
    this.props.requestEvents();
    // debugger
  }

  componentWillReceiveProps(nextProps){
    // debugger
    this.setState({
      myGroups:nextProps.memberGroups,
      otherGroups:nextProps.otherGroups
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
  //
  // ownGroups(){
  //   // debugger
  //   return this.state.myGroups.map((group)=>{
  //     // debugger
  //   return <GroupIndexItem group={group} key={group.id} currentUser={this.props.currentUser}/>;
  //   });
  // }
  // Your Meetups
  // {this.ownGroups()}
  // More Meetups
// goes on 62, 63, 64
  render() {
    // debugger
    // debugger
    // console.log(this.state.myGroups);
    const moregroups = (this.state.otherGroups.length > 0) ? "showgroups" : "hidegroups";
    // debugger
    const yourgroups = (this.state.myGroups.length > 0) ? "showgroups" : "hidegroups";
    return (
      <div id="myHeader">
        <SearchBox requestItems={this.props.requestGroups} searchtype="group"/>
        {this.awe()}
        <p className={`${yourgroups}`}>Your Meetus Groups</p>
        <ul className="groupIndex">
          {this.state.myGroups.map((group) => {
            return  <GroupIndexItem group={group} key={group.id} currentUser={this.props.currentUser}/>;
          })}
        </ul>
        <p className={`${moregroups}`}>Meetus Groups you can join</p>
    <ul className="groupIndex">
    {this.state.otherGroups.map((group) => {
      return  <GroupIndexItem group={group} key={group.id} currentUser={this.props.currentUser}/>;
    })}
    </ul>

  </div>
    );
  }
}

export default GroupIndex;
