import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './PostsBoard.css';
import { connect } from 'react-redux';
import Posts from './posts/posts.jsx';
import { getPostandCommentsById, getAllPosts } from '../../actions/actions.js';
import NewRequest from '../forms/NewRequest.jsx';
import PostDetail from '../PostDetail/PostDetail.jsx';

import { Dashboard2s } from '../UserProfile/DashboardLinks/DashboardLinks.jsx';

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

componentDidMount = () => {
  this.props.dispatch(getAllPosts())
}

  getPostandCommentsById = (props) => {
    this.props.dispatch(
      getPostandCommentsById(props),
    )
  }

  render() {
    // const { isAuthenticated } = this.props.auth;
    // const { id } = this.props.user;
    const { items } = this.props;
    const match = this.props.match.path;
    {console.log(this.props, 'PostBoard.jsx Props')}
    // const { isAuthenticated } = this.props.auth;

    return (
      <div className="postsBoard">

        <div id="postings-section">
          <div id="postings-section-title">All Postings</div>

          {/* <Link to="/post/specificPost"> */}
            <Posts props={this.props} match={match} items={items} getPostandCommentsById={this.getPostandCommentsById} />
          {/* </Link> */}
          <Route path="/dashboard2s" component={Dashboard2s} />
          

        </div>

        {/* <div className="auth-user-btns">
        <LinkButton to="/dashboard2s" title={"dashboard2s"} />
        <br /><br />
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
        </div> */}

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