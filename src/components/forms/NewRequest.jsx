import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './NewRequest.css';
import { connect } from 'react-redux';
import { addNewPost } from '../../actions/actions.js'

class NewRequest extends Component {
  constructor(props) {
    super(props);
    this.states = {
      subject: null,
      description: null,
      price: null,
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    console.log("New Request - handleSubmit this.props:", this.props);
    event.preventDefault();
    console.log('\n Submitted!!:', this.state);
    this.props.dispatch(addNewPost(this.state));
  }

  render() {
    return (
      <div id="container">

        <div id="new-request-title">New Feedback Request</div>

        {/* New Request form */}
        <form onSubmit={this.handleSubmit}>

          <div class="row">
            <div class="rowHeader">
              <label>Subject:</label>
              <input onChange={this.handleChange} className="user-input" type="text" name="subject" placeholder="enter subject" />
            </div>
          </div>

          <div class="row">
            <div class="rowHeader">
              <label>Description:</label>
              <input onChange={this.handleChange} className="user-input" type="text" name="description" placeholder="enter description" />
            </div>
          </div>

          {/* <div class="row">
            <div class="rowHeader">
              <label>Image Upload/URL:</label>
              <input onChange={this.handleChange} className="user-input" type="text" name="image" placeholder="upload an image" />
            </div>
          </div> */}

          <div class="row">
            <div class="rowHeader">
              <label>Set a Price:</label>
              <input onChange={this.handleChange} className="user-input" type="text" name="price" placeholder="enter price" />
            </div>
          </div>

          <br />
          <input id="user-newReq-btn" type="submit" value="Submit new request" />
          <br /><br />
          <input id="user-save-draft-btn" type="submit" value="Save draft for letter" />
          <br />
        </form>
      </div>
    );
  }
}

export default connect()(NewRequest);
