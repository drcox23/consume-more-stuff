import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './AddNewComment.css';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';

//Actions
import { addNewComment, addNewCommentDraft } from '../../actions/actions.js'

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      post_id: props.match.params.id,
      body: "",
    }
  }

  //This will set state from props everytime props changes
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user.id !== prevState.user_id) {
      return {
        user_id: nextProps.user.id
      };
    }
    else return null;
  }

  componentDidMount() {
    // const  { name } = jwtDecode(localStorage.getItem('id_token'))
    // const post_id  = this.props.match.params.id
    // console.log('can i see the post id', post_id)

    // this.props.dispatch(
    //   getTypeData(name)
    // )
  }

  handleChange = (event) => {
    event.preventDefault();
    console.log('whats the event', event)
    const { name, value } = event.target;
    // this.state.form[name] = value;
    this.setState({
      [name]: value
    })
    console.log("On Change - handleChange this.state.form:", this.state)
  }

  handleSubmit = (event) => {
    const id = this.props.match.params.id
    console.log("New Request - handleSubmit this.props:", this.props);
    event.preventDefault();
    console.log('\n Submitted!!:', this.state);
    this.props.history.push(`/dashboard/post/${id}`)
  }

  addComment = () => {
    this.props.dispatch(addNewComment(this.state));
  }

  addToDraftComments = () => {
    this.props.dispatch(addNewCommentDraft(this.state));
  }

  render() {
    console.log('add-new-comment props', this.props)

    return (
      <div id="new-comment-container">

        <div id="new-comment-title">Add New Comment</div>

        {/* New comment form */}
        <form onSubmit={this.handleSubmit}>

          <label className="new-comment-label">Comment:</label>
          <input onChange={this.handleChange} className="user-new-comment-input" type="text" name="body" placeholder="enter comment" />

          <br />

          {/* <label className="new-req-form-label">Media Type:</label>
          <select onChange={this.handleChange} name="type_id">
            <option>Select Media Type...</option>
            {this.props.type.map(line => <option key={line.id} value={line.id}>{line.type}</option>)}
          </select> */}


          <br />

          {/* <label className="new-req-form-label">Set a Price:</label>
          <input onChange={this.handleChange} className="user-new-req-input" type="text" name="price" placeholder="enter price" /> */}

          <br />
          <input id="user-new-comment-btn" type="submit" value="Submit new comment" onClick={this.addComment} />

          <input id="user-save-new-draft-comment-btn" type="submit" value="Save draft for later" onClick={this.addToDraftComments} />
          <br />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AddComment);
