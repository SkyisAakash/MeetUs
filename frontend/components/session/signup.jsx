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
    this.checkinput = this.checkinput.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.login({email:'user17', password:'user123'})
      .then(() => this.props.history.push('/groups'));
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
    this.props.createNewUser(this.state);
      // .then(this.props.history.push('/groups'));
  }

  checkinput(e) {
    if (e.keyCode === 13 || e.which === 13) this.handleSubmit(e, this.state);
  }

  render() {
    // console.log(this.props);
    return (
      <div className="loginpage">
      <div className="session-form" id="signup">

          <div className="formHeader">
        <h2>Sign up</h2>
        </div>
        <form onSubmit={this.handleSubmit} className="formlogin">
          <label><p className="logininfo">Your name:</p>
            <input
              type="text"
              className="inputField"
              value={this.state.username}
              onChange={this.handleInput('username')}
              onKeyPress={this.checkinput}
            />
          </label>
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
        </label>
            <br/>
            <span className="errors">{this.renderErrors()}</span>
          </form>

            <button className="loginb" onClick={this.handleSubmit}>Continue</button>
            <table><tr>
              <td className="hr"><hr/></td>
              <td className="or">OR</td>
              <td className="hr"><hr/></td>
            </tr></table>
            <div className="demosection">
              <br/>
                    <button onClick={this.handleDemo} className="demobutton" >Login as Demo User</button>
</div>
        <div className="gotologin">
          <div className="logintext">Already a member?   <Link to="/login">Log in</Link></div>
          </div>
      </div>
      </div>
    );
  }
}

export default Signup;
