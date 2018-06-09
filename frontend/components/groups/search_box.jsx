import React from 'react';

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

  handleInput(field) {
    return (e) => (
      this.setState({search_query:e.target.value})
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
    let klass = (this.props.searchtype === "group") ? "groupactive" : "";
    // debugger
    return (
    <form onSubmit={this.handleSubmit} className={`searchform ${this.state.pos}`}>
      <div className="searchtextbox">
        <input type="text" onChange={this.handleInput()} id="query" placeholder="All Meetups"/>
        <i className="fas fa-search" onClick={this.handleSubmit}></i>
      </div>
      <div className="twooptions">
        <a href="" id={klass}>Groups</a>
        <a href="" id={klass}>Calendar</a>
      </div>
    </form>
  );
  }
}
export default SearchBox;
