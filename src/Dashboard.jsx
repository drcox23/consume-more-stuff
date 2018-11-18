import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Dashboard.css';
import { connect } from 'react-redux';
import { getPostandCommentsById, getAllPosts, getAll } from './actions/actions.js';
import NewRequest from './components/forms/NewRequest.jsx';
import PostsBoard from './components/PostsBoard/PostsBoard.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';
import jwtDecode from 'jwt-decode';
import ProfileData from './components/UserProfile/ProfileData/ProfileData.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';

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
  if (!this.props.auth.isAuthenticated()) {
    this.props.dispatch(getAllPosts())
  } else {
    const { nickname } = jwtDecode(localStorage.getItem('id_token'))
    this.props.dispatch(getAll(nickname))
  }
}

  getPostandCommentsById = (props) => {
    this.props.dispatch(
      getPostandCommentsById(props),
    )
  }

  render() {
    const match = this.props.match;
    const id = this.props;
    const myprops = this.props;
    const { items } = this.props;
    const { isAuthenticated } = this.props.auth;
    const userid = this.props.user.id

    return (
      <div class="pageWrapper">
        <Route exact path={match.path} render={(props) => <PostsBoard items={items} getPostandCommentsById={this.getPostandCommentsById} match={match} props={this.props} />} />

        <Route path={`${match.path}/posts`} component={PostsBoard} />

        <Route path={`${match.path}/user/profile`} component={UserProfile} />

          <Route path={`${match.path}/:dashboardSelector`} component={Dashboard2} />
          <br /><br />
          {/* <Route path={`${match.path}/new-request`} component={NewRequest} /> */}
          {/* <Route path={`${match.path}/post/:id`} render={(props) => <PostDetail match={match} props={this.props} />} /> */}
          <Route path={`${match.path}/post/${userid}`} component={PostDetail} />
      

          <Route path={`/dashboard/new-request`} component={NewRequest} />


        <div className="auth-user-btns">

          {isAuthenticated() && <div>
      <ul style={{ listStyleType: "none" }}>
        <li style={{ padding: "10px" }}>
        <LinkButton to={`${match.url}/posts`} title={"All Posts"} />
        </li>
        <li style={{ padding: "10px" }}>
          <LinkButton id="my-posts" to={`${match.url}/my-posts`} title={"My Posts"} />
        </li>
        <li style={{ padding: "10px" }}>
          <LinkButton to={`/user/profile/${id}/draftposts`} title={"My Draft Posts"} />
        </li>
        <li style={{ padding: "10px" }}>
          <LinkButton to={`${match.url}/my-commnents`} title={"My Comments"} />
        </li>
        <li style={{ padding: "10px" }}>
          <LinkButton to={`/user/profile/${id}/draftcomments`} title={"My Draft Comments"} />
        </li>
        <li style={{ padding: "10px" }}>
          <LinkButton to={`${match.url}/new-request`} title={"New Request"} />
        </li>
      </ul>
    </div>}

        </div>

      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    items: state.items,
    user: state.user,
    draftPosts: state.draftPosts,
    draftComments: state.draftComments
  }
}


export const Dashboard2 = ({ match }) => {
  return (
    <p>{console.log('Component Toggled')}</p>
  );
}


export default connect(mapStateToProps)(Dashboard);