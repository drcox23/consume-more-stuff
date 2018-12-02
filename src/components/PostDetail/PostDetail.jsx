import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PostDetail.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

//Components
import Post from './post/post.jsx';
import Comments from './comments/comments.jsx';
import AddNewComment from '../forms/AddNewComment.jsx'
import PendingApprovalComments from '../PostDetail/PendingApprovalComments/PendingApprovalComments.jsx';
//Actions
import { getPostandCommentsById, approve, reject } from '../../actions/actions.js';


class PostsDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props.match.params
    const { name } = jwtDecode(localStorage.getItem('id_token'))

    this.props.dispatch(
      getPostandCommentsById(id, name),
    )
  }

  approveComment = (id) => {
    this.props.dispatch(
      approve(id),
    )
  }

  rejectComment = (id) => {
    this.props.dispatch(
      reject(id),
    )
  }

  render() {
    let { detailedItem, comments:orgComments } = this.props;
    // console.log('post by id props', this.props)
    const match = this.props.match.url;
    
    const waitComments = orgComments.filter(comment => comment.is_approved === null);
    const showComments = orgComments.filter(comment => comment.is_approved === true);

    console.log("PROPOS:", this.props)

    return (

      <div className="detailedPage">

        <div className="postDetail">
          <Post props={this.props} detailedItem={detailedItem} auth={this.props.auth} />
        </div>
        {/* <div className="addCommentBtn">
          <Link to={`${match}/add-comment`}><i class="fas fa-plus"></i> Add Comment</Link>
        </div> */}

        {this.props.auth() && this.props.detailedItem.user_id === this.props.user.id && <div className="pendingComments">
          <PendingApprovalComments comments={waitComments} auth={this.props.auth} approveComment={this.approveComment} rejectComment={this.rejectComment} />
        </div>}

        {/* <div className="pendingComments">
          <PendingApprovalComments comments={comments} auth={this.props.auth} />
        </div> */}


        <div className="comments">
          <Comments comments={showComments} />
        </div>


      </div>

    )
  }
}

const mapStateToProps = state => {

  return {
    detailedItem: state.detailedItem,
    comments: state.comments,
    user: state.user
  }
}

export default connect(mapStateToProps)(PostsDetail);