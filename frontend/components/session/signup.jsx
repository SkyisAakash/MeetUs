import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }


  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(this.props.history.push('/groups'));
  }

  render() {
    // console.log(this.props);
    return (
      <div className="session-form">
          {this.renderErrors()}
        <h2>Sign Up!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>
          <label>Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
              />
          </label>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          <input type="submit" value="signup"/>
          </label>
        </form>
      </div>
    );
  }
}

export default Signup;
