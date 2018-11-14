import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auth from '../../Auth/Auth.js';

const auth = new Auth();

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: auth.getProfile().nickname || "User",
    }
  }

  render() {
    return (this.state.username
    )
  }
}

export default connect()(Profile);