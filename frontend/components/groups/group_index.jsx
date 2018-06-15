import React from 'react';
import GroupIndexItem from './group_index_item';
import { Link } from 'react-router-dom';
import SearchBox from './search_box';
import LoadingIcon from '../loading_icon';
class GroupIndex extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      myGroups:props.memberGroups,
      otherGroups: props.otherGroups
    };
    this.awe = this.awe.bind(this);
  }
  componentDidMount() {
    this.props.getusers();
    this.props.requestGroups();
    this.props.requestgroupmembers();
    this.props.requestEvents();
    this.setState({
      myGroups:this.props.memberGroups,
      otherGroups:this.props.otherGroups
    });
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      myGroups:nextProps.memberGroups,
      otherGroups:nextProps.otherGroups
    });
  }

  checkifempty(obj) {
    return JSON.stringify(obj) === JSON.stringify([]);
  }

  awe(){
    if (this.checkifempty(this.props.groups) === true) {
      return <p className="awe">No matching group enties found</p>;
      }
  }

  render() {
    if (this.props.loading) {
     return <section className="pokemon-detail"><LoadingIcon /></section>;
   }
    const moregroups =
      (this.state.otherGroups.length > 0) ? "showgroups" : "hidegroups";
    const yourgroups =
      (this.state.myGroups.length > 0) ? "showgroups" : "hidegroups";
    return (
      <div id="myHeader">
        <SearchBox requestItems={this.props.requestGroups} searchtype="group"/>
        {this.awe()}
        <p className={`${yourgroups}`}>Your MeetUs Groups</p>
        <ul className="groupIndex">
          {this.state.myGroups.map((group) => {
            return  <GroupIndexItem group={group}
              key={group.id} currentUser={this.props.currentUser}/>;
          })}
        </ul>
        <p className={`${moregroups}`}>MeetUs Groups you can join</p>
        <ul className="groupIndex">
          {this.state.otherGroups.map((group) => {
            return  <GroupIndexItem group={group}
              key={group.id} currentUser={this.props.currentUser}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default GroupIndex;
