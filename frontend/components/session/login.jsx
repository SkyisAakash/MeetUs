import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.checkinput = this.checkinput.bind(this);
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
    <ul className="grperrors">
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>
          {error}
        </li>
      ))}
    </ul>
  );
}

componentDidMount() {
  this.props.removeErrors();
}

  handleDemo(e) {
    e.preventDefault();
    this.setState({email:'stephen@gmail.com', password:'user123'}, () => this.props.login(this.state)
      .then(() => this.props.history.push('/groups')))
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    this.props.login(this.state)
      .then(() => this.props.history.push('/groups'));
  }

  checkinput(e) {
    // debugger
    if (e.keyCode === 13 || e.which === 13) this.handleSubmit(e, this.state);
  }

  render() {
    // console.log(this.props);
    return (
      <div className="loginpage">
        <div className="session-form" id="loginsession">
          <div className="formHeader">
              <h2>Log In</h2>
          </div>
          <form onSubmit={this.handleSubmit} className="formlogin">
            <label><p className="logininfo">Email address:</p>
              <input
              type="text"
              className="inputField"
              value={this.state.email}
              onChange={this.handleInput('email')}
              onKeyPress={this.checkinput}
              />
            </label>

          <label><p className="logininfo">Password:</p>
            <input
            type="password"
            className="inputField"
            value={this.state.password}
            onChange={this.handleInput('password')}
            onKeyPress={this.checkinput}
            />

            <span className="errors">{this.renderErrors()}</span>
          </label>
        </form>
        <button className="loginb" onClick={this.handleSubmit}>Login</button>

        <table><tr>
          <td className="hr"><hr/></td>
          <td className="or">OR</td>
          <td className="hr"><hr/></td>
        </tr></table>
        <div className="demosection">
          <br/>
          <button onClick={this.handleDemo} className="demobutton">Login as Demo User</button>
        </div>
        <div className="gotologin">
        <div className="logintext">Not registered with us yet?  <Link to="/signup">Sign Up</Link> </div>
        </div>
    </div>

    </div>
    );
  }
}

export default Login;
