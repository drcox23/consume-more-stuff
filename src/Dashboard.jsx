import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './components/PostsBoard/PostsBoard.css';
import { connect } from 'react-redux';
// import Posts from './components/PostsBoard/posts/posts.jsx';
import { getPostandCommentsById, getAllPosts } from './actions/actions.js';
import NewRequest from './components/forms/NewRequest.jsx';
import PostsBoard from './components/PostsBoard/PostsBoard.jsx';
import PostDetail from './components/PostDetail/PostDetail';

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

      <Route path={`${match.path}/:dashboardSelector`} component={Dashboard2} />
      <Route path={`${match.path}/poop`} component={poop} />
      <Route path={`${match.path}/posts`} component={PostsBoard} />
      <Route path={`${match.path}/post/:id`} component={PostDetail} />
      <Route exact path={match.path} render={() => <PostsBoard />} />

          <Route path={`/dashboard/new-request`} component={NewRequest} />

          {/* <Route path={`/`} component={PostsBoard} /> */}
          {/* <div id="postings-section-title">All Postings</div>

          <Link to="/post/specificPost">
            <Posts items={items} getPostandCommentsById={this.getPostandCommentsById} />
          </Link> */}
          <Route path="/dashboard2s" component={Dashboard2s} />


        <div className="auth-user-btns">

{isAuthenticated() &&
  <Dashboard2s match={this.props.match}/>}

        <br /><br />
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

export const Dashboard2s = ({ match }) => {
  return (
    <div>
      <h2>Dashboard2s</h2>
      <ul style={{ listStyleType: "none" }}>
        <li>
        <LinkButton to={`${match.url}/posts`} title={"All Requests"} />
        </li>
        <li>
          <LinkButton id="myRequestsBtn" to={`${match.url}/components`} title={"Components"} />
        </li>
        <li>
          <LinkButton to={`${match.url}/props-v-state`} title={"Props v. State"} />
        </li>
        <li>
          <LinkButton to={`${match.url}/poop`} title={"Props v. State"} />
        </li>
      </ul>
    </div>
  );
}

export const Dashboard2 = ({ match }) => {
  return (
    <p>{console.log('Component Toggled')}</p>
  );
}

export const poop = ({ match }) => {
    return (
        <div>POOP</div>
    )
}

export const Posts = () => {
  return (
    <PostsBoard />
  )
}

export default connect(mapStateToProps)(Dashboard);