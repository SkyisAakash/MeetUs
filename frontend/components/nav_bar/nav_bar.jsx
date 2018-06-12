
import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showDropdown: true};
    this.toggle = this.toggle.bind(this);
    this.outofhere = this.outofhere.bind(this);
  }

  makeGroup() {

  }

  render() {
    return (
      <header className="nav-bar">
        <Link to="/"><img className="logo" src="https://s26.postimg.cc/eur407edl/meetus_logo.png"/></Link>
        <div className="rightSideNav">
          <Link to="/groups/create" className="startGroup">Start a new group</Link>
          {this.display()}
        </div>
      </header>
    );
  }


  toggle() {
    this.setState({
      showDropdown: !this.state.showDropdown
    });
  }

  outofhere() {
    this.setState({
      showDropdown: true
    }, ()=> this.props.logout());
  }

  display() {
  const display = this.props.currentUser ? (
      <div>
        <div id="gear-dropdown-btn">
  				<i className="fas fa-user-circle" id="usericon" onClick={this.toggle}></i>
        </div>
            <ul id="gear-dropdown" className="gear-dropdown" hidden={this.state.showDropdown}>
              <div className="triangle"></div>
              <div className="gearbox">
            <p><a className="gearcontent" href="">Find Groups></a></p>
              <div className="dropdownlist">
      			       <li><a className="dropdownOptions" onClick={()=>{this.props.openModal('user');this.toggle();}} id="profile">Profile</a></li>
      			       <li><a className="dropdownOptions" href="#">Settings</a></li>
      			       <li><a className="dropdownOptions" id="log" href="#" onClick={this.outofhere}>Logout</a></li>
            </div>
            </div>
          </ul>
      </div>
    ) : (
      <div className="buttons">
        <Link className="btn" to="/login">Log in</Link>
        <Link className="btn" to="/signup">Sign up</Link>
      </div>
    );
    return display;
  }
}
export default NavBar;
