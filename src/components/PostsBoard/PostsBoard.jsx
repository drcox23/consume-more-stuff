import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './PostsBoard.css';
import { connect } from 'react-redux';
import Posts from './posts/posts.jsx';
import { getPostandCommentsById } from '../../actions/actions.js';

const LinkButton = (props) => {
  return (
    <Link to={props.to}>
      <button className="auth-navbar-btns">{props.title}</button>
    </Link>
  )
}

class PostsBoard extends Component {
  constructor(props) {
    super(props);
  }

  getPostandCommentsById = (props) => {
    this.props.dispatch(
      getPostandCommentsById(props),
    )
  }

  render() {
    const { items } = this.props
    const { isAuthenticated } = this.props.auth;
    const { id } = this.props.user;

    return (
      <div className="postsBoard">

        <div id="postings-section">
          <div id="postings-section-title">All Postings</div>

          <Link to="/post/specificPost">
            <Posts items={items} getPostandCommentsById={this.getPostandCommentsById} />
          </Link>

        </div>

        <div className="auth-user-btns">
          {isAuthenticated() &&
            <LinkButton to={"/my-posts"} title={"My Posts"} />}
          <br /><br />
          {isAuthenticated() &&
            <LinkButton to={`/user/profile/${id}/draftposts`} title={"My Drafts Posts"} />}
          <br /><br />
          {isAuthenticated() &&
            <LinkButton to={"/my-comments"} title={"My Comments"} />}
          <br /><br />
          {isAuthenticated() &&
            <LinkButton to={`/user/profile/${id}/draftcomments`} title={"My Draft Comments"} />}
          <br /><br />
          {isAuthenticated() &&
            <LinkButton to={"/new-request"} title={"New Request"} />}
        </div>

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