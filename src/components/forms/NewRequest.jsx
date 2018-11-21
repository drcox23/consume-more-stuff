import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './NewRequest.css';
import { connect } from 'react-redux';

//Actions
import { getTypeData, addNewPost, addNewDraftPost } from '../../actions/actions.js'

class NewRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      subject: "",
      body: "",
      type_id: "",
      price: ""
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
    // this.state.form[name] = value;
    this.setState({
      [name]: value
    })
    console.log("On Change - handleChange this.state.form:", this.state.form)
  }

  handleSubmit = (event) => {
    console.log("New Request - handleSubmit this.props:", this.props);
    event.preventDefault();
    console.log('\n Submitted!!:', event.target);
  }

  addToPosts = () => {
    this.props.dispatch(addNewPost(this.state.form));
  }

  addToDraftPosts = () => {
    this.props.dispatch(addNewDraftPost(this.state.form));
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
              <label>Body:</label>
              <input onChange={this.handleChange} className="user-input" type="text" name="body" placeholder="enter description" />
            </div>
          </div>

          <div class="row">
            <div class="rowHeader">
              <label>Media Type:
                <select onChange={this.handleChange} name="type_id">
                  <option>Select Media Type...</option>
                  {this.props.type.map(line => <option key={line.id} value={line.id}>{line.type}</option>)}
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
          <input id="user-newReq-btn" type="submit" value="Submit new request" onClick={this.addToPosts}/>
          <br /><br />
          <input id="user-save-draft-btn" type="submit" value="Save draft for later" onClick={this.addToDraftPosts}/>
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
