import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auth from '../../Auth/Auth.js';

const auth = new Auth();

class Picture extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hi: 'hi'
    }
  }

  render() {
    let profilepicurl = auth.getGreeting().picture;
    return (<img src={profilepicurl} />)
  }
}

export default connect()(Picture);