import React, { Component } from 'react';
import logo from '../../2cents.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './LoginForm.css';
import SignupForm from './SignupForm.jsx';

class LoginForm extends Component {
  render() {
    return (
      <div id="container">
        {/* Logo */}
        <div id="login-logo-container">
          <img src={logo} alt="logo" />
        </div>

        {/* Login form */}
        <form action="/">

          <div class="row">
            <div class="rowHeader">
              <label>Username:</label>
              <input className="user-input" type="text" name="username" placeholder="enter username" />
            </div>
          </div>

          <div class="row">
            <div class="rowHeader">
              <label>Password:</label>
              <input className="user-input" type="text" name="name" placeholder="enter password" />
            </div>
          </div>

          <br />
          <input id="user-login-btn" type="submit" value="Login" />
          <br /><br />
          <p id="login-question">Not a 2¢ user?</p>
          <br />
          <Link to="/signup">
            <p id="signup-link">Sign up now!</p>
          </Link>
        </form>
      </div>
    );
  }
}

export default LoginForm;
