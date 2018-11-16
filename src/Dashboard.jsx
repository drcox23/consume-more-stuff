import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './components/PostsBoard/PostsBoard.css';
import { connect } from 'react-redux';
import Posts from './components/PostsBoard/posts/posts.jsx';
import { getPostandCommentsById, getAllPosts } from './actions/actions.js';
import NewRequest from './components/forms/NewRequest.jsx';
import PostsBoard from './components/PostsBoard/PostsBoard.jsx';

const LinkButton = (props) => {
  return (
    <Link to={props.to}>
      <button className="auth-navbar-btns">{props.title}</button>
    </Link>
  )
}

class Dashboard extends Component {
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
    const match = this.props.match;
    const { items } = this.props
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="postsBoard">
        {console.log(match, 'wth is this?')}
        <div id="postings-section">

          <Route path={`/dashboard/new-request`} component={NewRequest} />

          <Route path={`/dashboard`} component={PostsBoard} />
          {/* <div id="postings-section-title">All Postings</div>

          <Link to="/post/specificPost">
            <Posts items={items} getPostandCommentsById={this.getPostandCommentsById} />
          </Link> */}

        </div>

        <div className="auth-user-btns">
          {isAuthenticated() &&
            <LinkButton id="myRequestsBtn" to={"/my-requests"} title={"My Requests"} />}
          <br /><br />
          {isAuthenticated() &&
            <LinkButton to={"/my-comments"} title={"My Comments"} />}
          <br /><br />
          {isAuthenticated() &&
            <LinkButton to={"/dashboard/new-request"} title={"New Request"} />}
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

export default connect(mapStateToProps)(Dashboard);