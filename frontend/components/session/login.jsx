import React from 'react';
import   { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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


  handleDemo(e) {
    e.preventDefault();
    this.setState({email:'user17', password:'user123'}, () => this.props.login(this.state)
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
      <div className="loginpage">
        <div className="session-form">
          {this.renderErrors()}
          <div className="formHeader">
              <h2>Log In<img className="lockSymbol" src="https://s26.postimg.cc/tkyx0y9pl/locksymbolonlogin.png"/></h2>
              <p className="shit">Not registered with us yet? </p><Link to="/signup" className="signupLink">Sign Up</Link>
          </div>
          <form onSubmit={this.handleSubmit} className="formlogin">
            <label><p className="logininfo">Email address:</p>
              <input
              type="text"
              className="inputField"
              value={this.state.email}
              onChange={this.handleInput('email')}
              />
            </label>

          <label><p className="logininfo">Password:</p>
            <input
            type="password"
            className="inputField"
            value={this.state.password}
            onChange={this.handleInput('password')}
            />
            <input type="checkbox" className="checkbox"/><p className="checkboxtext">Keep me signed in</p>
            <input type="submit" value="Login" className="loginb"/>
          </label>
        </form>
        <table><tr>
          <td className="hr"><hr/></td>
          <td className="or">OR</td>
          <td className="hr"><hr/></td>
        </tr></table>
        <div className="demosection">
          <br/>
          <button onClick={this.handleDemo} className="demobutton">Login as Demo User</button>
        </div>
      </div>

    </div>
    );
  }
}

export default Login;
