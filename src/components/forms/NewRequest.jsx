import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './NewRequest.css';
import { connect } from 'react-redux';

//Actions
import { getTypeData, addNewPost } from '../../actions/actions.js'

class NewRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        user_id: this.props.user.id
      }
    }
  }

  componentDidMount() {
    this.props.dispatch(
      getTypeData()
    )
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.state.form[name] = value;
    console.log("On Change - handleChange this.state.form:", this.state.form)
  }

  handleSubmit = (event) => {
    console.log("New Request - handleSubmit this.props:", this.props);
    event.preventDefault();
    console.log('\n Submitted!!:', this.state.form);
    this.props.dispatch(addNewPost(this.state.form));
  }

  render() {
    return (
      <div id="new-post-container">

        <div id="new-post-title">New Post Request</div>

        {/* New Request form */}
        <form onSubmit={this.handleSubmit}>

          <label className="new-req-form-label">Subject:</label>
          <input onChange={this.handleChange} className="user-new-req-input" type="text" name="subject" placeholder="enter subject" />

          <br />

          <label className="new-req-form-label">Body:</label>
          <input onChange={this.handleChange} className="user-new-req-input" type="text" name="body" placeholder="enter description" />

          <br />

          <label className="new-req-form-label">Media Type:</label>
          <select onChange={this.handleChange} name="type_id">
            <option>Select Media Type...</option>
            {this.props.type.map(line => <option key={line.id} value={line.id}>{line.type}</option>)}
          </select>


          <br />

          <label className="new-req-form-label">Set a Price:</label>
          <input onChange={this.handleChange} className="user-new-req-input" type="text" name="price" placeholder="enter price" />

          <br />
          <input id="user-newReq-btn" type="submit" value="Submit new post" />
          <input id="user-save-draft-btn" type="submit" value="Save draft for later" />
          <br />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    type: state.type
  }
}

export default connect(mapStateToProps)(NewRequest);
