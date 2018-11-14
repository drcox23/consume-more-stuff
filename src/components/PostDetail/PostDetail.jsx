import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './post/post.jsx';
import Comments from './comments/comments.jsx';

import './PostDetail.css';

class PostsDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("PostDetail - props", this.props);
    const { detailedItem, comments } = this.props;

    console.log("PostDetail - comments", comments);
    console.log("PostDetail - detailedItem", detailedItem);

    return (
      <div className="detailedPage">
        <div className="postDetail">
          <Post detailedItem={detailedItem} />
        </div>

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