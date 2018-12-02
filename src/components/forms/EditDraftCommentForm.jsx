import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './EditDraftCommentForm.css';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';

//Actions
import { addNewComment, updateDraftComment, getDraftCommentAndPostById } from '../../actions/actions.js'

class EditDraftCommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draft_id:"",
      user_id: "",
      body: "",
      post_id: ""
    }
  }

  //This will set state from props everytime props changes
  // static getDerivedStateFromProps(nextProps, prevState){
  //   if(nextProps.detailedDraftComments !== prevState.detailedDraftComments){
  //     return {         
  //       original: {
  //         user_id: nextProps.user.id,
  //         body: nextProps.detailedDraftComments.body,
  //         post_id: nextProps.detailedDraftComments.post_id,
  //       }
  //     };
  //   }
  //   else return null;
  // }

  componentDidMount() {
    const { name } = jwtDecode(localStorage.getItem('id_token'))
    const draftId = this.props.match.params.id
    const userId = this.props.user.id

    console.log("whats the id??", draftId)
    console.log("can i see the user id???", userId)

    this.props.dispatch(
      getDraftCommentAndPostById(userId, draftId)
    )
  }



  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
    console.log("On Change - handleChange this.state.form:", this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  //Submit an object called form and iterate over this.state with for...in to check for which data to use (org data vs newly changed data)
  // submittingForm = () => {
  //   let form = {};

  //   for (const key in this.state) {
  //     console.log("can i see the key", key)
  //     if (this.state[key] === "") {
  //       form[key] = this.state.original[key]
  //     } else {
  //       form[key] = this.state[key]
  //     }
  //   }
  //   //Because form was created from an iteration of this.state, form now also includes original. Delete original to dispatch a clean form to axios
  //   delete form.original;

  //   return form;
  // }

  addComment = () => {
    this.props.dispatch(
      addNewComment(this.props.detailedDraftComment.id, this.submittingForm())
    );
  }


  editToDraftPosts = () => {
    // console.log("HUHH", this.props);

    this.props.dispatch(
      updateDraftComment(this.props.user.id, this.props.detailedDraftComment.id)
    );
  }


  render() {
    console.log("what are the props", this.props)
    return (
      <div id="edit-draft-comment-container">
      <br></br>

        <div id="associated-post-title">Original Post</div>
        <div id="post-details-subject">{this.props.detailedItem.subject}</div>
        <div id="post-details-body">{this.props.detailedItem.body}</div>
        <div id="post-details-price">{this.props.detailedItem.price}</div>

        <div id="edit-draft-comment-title">Edit Draft Comment</div>

        {/* Edit Draft Comment form */}
        <form onSubmit={this.handleSubmit}>

         

          <div class="row">
            <div class="rowHeader">
              <label>Body:</label>
              <input onChange={this.handleChange} className="user-edit-draft-comment-input" type="text" name="body" defaultValue={this.props.detailedDraftComment.body} />
            </div>
          </div>


          <br />
          <input id="user-edit-draft-comment-btn" type="submit" value="Submit new comment" onClick={this.addComment} />

          <input id="user-save-draft-comment-btn" type="submit" value="Save comment for later" onClick={this.editToDraftPosts} />
          <br />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    detailedDraftComment: state.detailedDraftComment,
    detailedItem: state.detailedItem
  }
}

export default connect(mapStateToProps)(EditDraftCommentForm);