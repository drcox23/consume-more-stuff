import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class LoginForm extends Component {
  render() {
    return (
    <form>
        <input type="text" placeholder="username"/>
        <input type="text" placeholder="password"/>
        <button>submit</button>
    </form>
    );
  }
}

export default LoginForm;
