import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PostDetail.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Components
import Post from './post/post.jsx';
import Comments from './comments/comments.jsx';
import AddNewComment from '../forms/AddNewComment.jsx'

//Actions
import { getPostandCommentsById } from '../../actions/actions.js';


class PostsDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props.match.params

    this.props.dispatch(
      getPostandCommentsById(id),
    )
  }

  render() {
    const { detailedItem, comments } = this.props;
    // console.log('post by id props', this.props)
    const match = this.props.match.url;

    return (

      <div className="detailedPage">

        <div className="postDetail">
          <Post props={this.props} detailedItem={detailedItem} auth={this.props.auth} />
        </div>
        {/* <div className="addCommentBtn">
          <Link to={`${match}/add-comment`}><i class="fas fa-plus"></i> Add Comment</Link>
        </div> */}


        <div className="comments">
          <Comments comments={comments} />
        </div>


      </div>

    )
  }
}

const mapStateToProps = state => {

  return {
    detailedItem: state.detailedItem,
    comments: state.comments
  }
}

export default connect(mapStateToProps)(PostsDetail);