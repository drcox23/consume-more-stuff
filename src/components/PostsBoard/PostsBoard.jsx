import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './PostsBoard.css';
import { connect } from 'react-redux';
import Posts from './posts/posts.jsx';
import { getPostandCommentsById, getAllPosts } from '../../actions/actions.js';

class PostsBoard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.dispatch(getAllPosts())
  }

  getPostandCommentsById = (props) => {
    this.props.dispatch(
      getPostandCommentsById(props),
    )
  }

  checkForParentComponent = () => {
    if (this.props.auth) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const auth = this.props.auth;
    const { items } = this.props;
    const match = this.props.match.path;

    return (
      <div className="postsBoard">

      {this.checkForParentComponent() && <div id="postings-section-auth">
      <div id="postings-section-title">All Postings</div>
      
      <Posts props={this.props} auth={auth} match={match} items={items} getPostandCommentsById={this.getPostandCommentsById} />
      
      </div>
      }
 
      
      {!this.checkForParentComponent() && <div id="postings-section">
      <div id="postings-section-title">All Postings</div>
      
      <Posts props={this.props} auth={auth} match={match} items={items} getPostandCommentsById={this.getPostandCommentsById} />
      
      </div>
      }
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(PostsBoard);