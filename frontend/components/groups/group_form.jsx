import React from 'react';
import { withRouter } from 'react-router-dom';


class GroupForm extends React.Component {
constructor(props) {
  super(props);
  this.state = this.props.group;
  this.handleInput = this.handleInput.bind(this);
  this.submitform = this.submitform.bind(this);
}


handleInput(field) {
  return (e) => (
    this.setState({[field]:e.target.value})
  );
}

submitform() {

  this.props.submitGroup(this.state).then((payload) => {
    this.props.history.push(`/groups/${payload.group.id}`);
  });

}

  render () {
    // debugger
    return (
      <div>
<form onSubmit={()=>this.submitform()}>
<input type="text" value={this.state.description} onChange={this.handleInput('description')}/>
<input type="string" value={this.state.title} onChange={this.handleInput('title')}/>
<input type="string" value={this.state.image_url} onChange={this.handleInput('image_url')}/>
<input type="submit" value="edit"/>

</form>
      </div>
    );
  }
}

export default withRouter(GroupForm);
