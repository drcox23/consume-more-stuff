import React, { Component } from 'react';
import { connect } from 'react-redux'
import Post from './post/post.jsx'

import './PostDetail.css';

class PostsDetail extends Component {
    constructor(props) {
      super(props);
  
    }
  
    render() {
  
      const { items } = this.props

      console.log("WUT", items);
  
      return (
        <div className="postDetail">
            <Post items={items} />
        </div>
  
      )
    }
  }
  
  const mapStateToProps = state => {
  
    return {
      items: state
    }
  }
  
  export default connect(mapStateToProps)(PostsDetail);