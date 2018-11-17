import React, { Component } from 'react';
import { connect } from 'react-redux';

//Components
import Post from './post/post.jsx';
import Comments from './comments/comments.jsx';

//Actions
import { getPostandCommentsById } from '../../actions/actions.js';

import './PostDetail.css';

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
    console.log(this.props, ' WAT IS DIS EVEN GETTING RN')
    const { detailedItem, comments } = this.props;

    return (
      <div className="detailedPage">
        <div className="postDetail">
          <Post props={this.props} detailedItem={detailedItem} />
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