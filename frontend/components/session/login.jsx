import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleDemo(e) {
    e.preventDefault();
    this.setState({username:'user17', password:'user123'}, () => this.props.login(this.state)
      .then(() => this.props.history.push('/groups')));
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    this.props.login(this.state)
      .then(() => this.props.history.push('/groups'));
  }

  render() {
    // console.log(this.props);
    return (
      <div className="session-form">
        <h2>Log In!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleInput('username')}
          />
          </label>

          <label>Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleInput('password')}
          />
        <input type="submit" value="login"/>
            <button onClick={this.handleDemo}>Demo</button>
          </label>
        </form>
      </div>
    );
  }
}

export default Login;
