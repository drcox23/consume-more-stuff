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

    return (
      <div className="postsBoard">
        <Link to="/post/:id">
          <Posts items={items} />
        </Link>
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