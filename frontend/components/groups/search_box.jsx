import React from 'react';
import { Link } from 'react-router-dom';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.state={search_query:""};
    this.handleSubmit=this.handleSubmit.bind(this);
    this.checkpos=this.checkpos.bind(this);
  }

  componentDidMount() {
    // debugger

    this.props.requestItems(this.state.search_query);
    window.addEventListener('scroll', this.checkpos);
  }

  handleInput() {
    // debugger
    return (e) => (
      this.setState({search_query:e.target.value}, () => this.props.requestItems(this.state.search_query))
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    this.props.requestItems(this.state.search_query);
  }


  checkpos(e) {
    if (document.scrollingElement.scrollTop > 209) {
      this.setState({
        pos: 'stopmoving',
      });
    } else {
      this.setState({
        pos: '',
      });
    }
  }
  render () {
    // debugger
    let klassg = (this.props.searchtype === "group") ? "groupactive" : "";
    let klasse = (this.props.searchtype === "event") ? "eventactive" : "";
    // debugger
    return (
    <form onSubmit={this.handleSubmit} className={`searchform ${this.state.pos}`}>
      <div className="searchtextbox">
        <input type="text" onChange={this.handleInput()} id="query" placeholder="All Meetups"/>
        <i className="fas fa-search" onClick={this.handleSubmit}></i>
      </div>
      <div className="twooptions">
        <Link to="/groups/" className="" id={klassg}>Groups</Link>
        <Link to="/events/" className="" id={klasse}>Calendar</Link>


      </div>
    </form>
  );
  }
}
export default SearchBox;
