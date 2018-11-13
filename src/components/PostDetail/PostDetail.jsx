import React, { Component } from 'react';
import { connect } from 'react-redux'
import Post from './post/post.jsx'

import './PostDetail.css';

class PostsDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("PostDetail - props", this.props);

    const { detailedItem } = this.props

    return (
      <div className="postDetail">
        <Post detailedItem={detailedItem} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    detailedItem: state.detailedItem
  }
}

export default connect(mapStateToProps)(PostsDetail);