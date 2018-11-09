import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './LoginForm.css';

class LoginForm extends Component {
  render() {
    return (
      <form>
        <h1>2¢</h1>
        <label>User Name:</label>
        <input type="text" placeholder="enter username" />

        <label>Password:</label>
        <input type="text" placeholder="enter password" />

        <button>Sign In</button>
        <Router>
          <div>
            <p>Not a 2¢ user? Sign up</p>

            <Link to="/signup">
              <p>now!</p>
            </Link>

            <Route path="/signup"></Route>

          </div>
        </Router>
      </form>
    );
  }
}

export default LoginForm;
