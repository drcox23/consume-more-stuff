import React, { Component } from 'react';
import logo from '../2cents.png';
import './Home.css';

class Home extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {isAuthenticated() &&
          (<h1 id="welcome-greeting">Welcome to 2¢!<br /><br />

            <div id="auth-imgBox">
              <img src={logo} alt="logo" />
            </div>
            <br />

            <a id="valid-user-login-msg" style={{ cursor: 'pointer' }} onClick={this.goTo.bind(this, '')}>Enter site {' '}
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
              <i class="fas fa-sign-in-alt"></i>
            </a></h1>)}

        {!isAuthenticated() &&
          (<h1>You are not logged in! Please{' '}
            <a id="invalid-user-login-msg" style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>Log In</a>{' '}to continue.</h1>)}
      </div>
    );
  }
}

export default Home;
