import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./SignupForm.css";
import { connect } from 'react-redux';
import { registerUser } from '../../actions/actions.js'

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      username: this.props.username,
      password: this.props.password,
      email: this.props.email
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log('SUBMITTED!!!!', this.state)
    const sendIt = {
      irst_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
    console.log("SUMBITTED DATA", sendIt)
    this.props.dispatch(registerUser(sendIt))

  }

  handleChange = (e) => {
    console.log("is handlechange being called")
    e.preventDefault()
    const { name, value } = e.target
    // console.log("checking the change", e.target)
    this.setState({
      [name] : value
    })
  }


  render() {
    return (
      <Router >
      <div id="container">
        <p id="signup-title">Sign Up!</p>
        <form onSubmit={this.handleSubmit}>
          <div class="row">
            <div class="rowHeader">
              <label>First Name:</label>
              <input type="text" value={this.state.first_name} onChange={this.handleChange} name="first_name" placeholder="First Name" />
            </div>
          </div>
          <div class="row">
            <div class="rowHeader">
              <label>Last Name:</label>
              <input type="text" value={this.state.last_name} onChange={this.handleChange} name="last_name" placeholder="Last Name" />
            </div>
          </div>
          <div class="row">
            <div class="rowHeader">
              <label>Username:</label>
              <input type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="enter username" />
            </div>
          </div>
          <div class="row">
            <div class="rowHeader">
              <label>Password:</label>
              <input type="text" value={this.state.password} onChange={this.handleChange} name="password" placeholder="enter password" />
            </div>
          </div>
          <div class="row">
            <div class="rowHeader">
              <label>Email:</label>
              <input type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="enter email" />
            </div>
          </div>

          <br />
          
            <div>
              <Link to="/">
                <input type="submit" value="Sign Up for 2¢!" required />
              </Link>
            </div>
          
        </form>
      </div>
      </Router >
    );
  }
}

export default SignupForm;
