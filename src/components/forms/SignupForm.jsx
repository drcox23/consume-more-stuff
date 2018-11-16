import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./SignupForm.css";

class SignupForm extends Component {
  render() {
    return (
      <div id="container">
        <p id="signup-title">Sign Up!</p>
        <form class="form" action="/auth/register" method="post">
          <div class="row">
            <div class="rowHeader">
              <label>First Name:</label>
              <input type="text" name="first_name" placeholder="First Name" />
            </div>
          </div>
          <div class="row">
            <div class="rowHeader">
              <label>Last Name:</label>
              <input type="text" name="last_name" placeholder="Last Name" />
            </div>
          </div>
          <div class="row">
            <div class="rowHeader">
              <label>Username:</label>
              <input type="text" name="username" placeholder="enter username" />
            </div>
          </div>
          <div class="row">
            <div class="rowHeader">
              <label>Password:</label>
              <input type="text" name="password" placeholder="enter password" />
            </div>
          </div>
          <div class="row">
            <div class="rowHeader">
              <label>Email:</label>
              <input type="text" name="email" placeholder="enter email" />
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
