import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './PostsBoard.css';
import { connect } from 'react-redux'
import Posts from './posts/posts.jsx'

class PostsBoard extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log("\nPostsBoards - props:", this.props);

    const { items } = this.props

    console.log("What is this", items)

    return (
      <div className="postsBoard">
        <Posts items={items} />
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    items: state
  }
}

export default connect(mapStateToProps)(PostsBoard);