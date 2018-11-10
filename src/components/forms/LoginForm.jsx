import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './LoginForm.css';
import SignupForm from './SignupForm.jsx';

class LoginForm extends Component {
  render() {
    return (
      <div id="container">
        <p id="login-title">2¢</p>
        <form action="/">
          <div class="row">
            <div class="rowHeader">
              <label>Username:</label>
              <input type="text" name="username" placeholder="enter username" />
            </div>
          </div>
          <div class="row">
            <div class="rowHeader">
              <label>Password:</label>
              <input type="text" name="name" placeholder="enter password" />
            </div>
          </div>
          <br />
          <input type="submit" value="Submit" />
          <br />
          <p>Not a 2¢ user?</p>
          <br />
          <Link to="/signup">Sign up now!</Link>
        </form>
      </div>
    );
  }
}

export default LoginForm;
