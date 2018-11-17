import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auth from '../../Auth/Auth.js';

const auth = new Auth();

class Greeting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: auth.getGreeting().given_name || auth.getGreeting().nickname || "User",
    }
  }

  render() {
    return (this.state.username)
  }
}

export default connect()(Greeting);