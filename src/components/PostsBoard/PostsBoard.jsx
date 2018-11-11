import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './PostsBoard.css';
import { connect } from 'react-redux'
import Posts from './posts/posts.jsx'
import PostDetail from '../PostDetail/PostDetail.jsx';
import { getAllPosts, getPostById } from '../../actions/actions.js'

class PostsBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.props.dispatch(
      getAllPosts()
    )
    this.setState({
      posts: this.props.items
    })
  }

  getPostById = (props) => {
    this.props.dispatch(
      getPostById(props)
    )
  }

  render() {
    console.log("\nPostsBoards - props:", this.state);

    const { items } = this.props

    return (
      <div className="postsBoard">
        <Link to="/post/specificPost">
          <Posts items={items} getPostById={this.getPostById}/>
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