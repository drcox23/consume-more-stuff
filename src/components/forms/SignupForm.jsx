import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './SignupForm.css';

class SignupForm extends Component {
  render() {
    return (
      <div id="container">
        <p id="signup-title">Sign Up!</p>
        <form action="">
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
          <Router>
            <div>
              <Link to="/">
                <button>Sign Up for 2¢!</button>
              </Link>

            </div>
          </Router>
        </form>
      </div>
    );
  }
}

export default SignupForm;
