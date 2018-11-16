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
      body: null,
      price: null,
      type_id: null,
      user_id: null,
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
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
              <label>User:
                <select onChange={this.handleChange} name="user_id">
                  <option>Select Your Name...</option>
                  <option value="1">Wymin</option>
                  <option value="2">May</option>
                  <option value="3">Doug</option>
                  <option value="4">Chaz</option>
                </select>
              </label>
            </div>
          </div>

          <div class="row">
            <div class="rowHeader">
              <label>Subject:</label>
              <input onChange={this.handleChange} className="user-input" type="text" name="subject" placeholder="enter subject" />
            </div>
          </div>

          <div class="row">
            <div class="rowHeader">
              <label>Body:</label>
              <input onChange={this.handleChange} className="user-input" type="text" name="body" placeholder="enter description" />
            </div>
          </div>

          <div class="row">
            <div class="rowHeader">
              <label>Media Type:
                <select onChange={this.handleChange} name="type_id">
                  <option>Select Media Type...</option>
                  <option value="1">Idea</option>
                  <option value="2">Image</option>
                  <option value="3">Video</option>
                  <option value="4">Review</option>
                </select>
              </label>
            </div>
          </div>

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
