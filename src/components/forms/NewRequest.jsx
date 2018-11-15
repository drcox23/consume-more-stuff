import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './NewRequest.css';

class NewRequest extends Component {
  render() {
    return (
      <div id="container">

        <div id="new-request-title">New Feedback Request</div>

        {/* New Request form */}
        <form action="/add">

          <div class="row">
            <div class="rowHeader">
              <label>Subject:</label>
              <input className="user-input" type="text" name="user-subject-input" placeholder="enter subject" />
            </div>
          </div>

          <div class="row">
            <div class="rowHeader">
              <label>Description:</label>
              <input className="user-input" type="text" name="user-description-input" placeholder="enter description" />
            </div>
          </div>

          <div class="row">
            <div class="rowHeader">
              <label>Image Upload/URL:</label>
              <input className="user-input" type="text" name="" placeholder="enter description" />
            </div>
          </div>

          <div class="row">
            <div class="rowHeader">
              <label>Set a Price:</label>
              <input className="user-input" type="text" name="" placeholder="enter description" />
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

export default NewRequest;
