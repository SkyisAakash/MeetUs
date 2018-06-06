import React from 'react';
import   { Link } from 'react-router-dom';


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
      <div className="loginpage">
      <div className="session-form signup">
          {this.renderErrors()}
          <div className="formHeader signup">
        <h2 className="signupheader">Sign up</h2>
        </div>
        <form onSubmit={this.handleSubmit} className="formlogin">
          <label><p className="logininfo">Your name</p>
            <input
              type="text"
              className="inputField"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>
          <label><p className="logininfo">Email address</p>
              <input
                type="text"
                className="inputField"
                value={this.state.email}
                onChange={this.handleInput('email')}
              />
          </label>
          <label><p className="logininfo">Password</p>
            <input
              type="password"
              className="inputField"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
        </label>
            <br/>
          <input type="submit" value="Continue" className="loginb signup"/>
          <br />
          <br />
          <hr className="hrsignup"/>
          <div className="gotologin">
          <div className="logintext">Already a member? </div>
          <Link to="/login" className="loginlink"><span className="loginlinktext">Log in</span></Link>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default Signup;
