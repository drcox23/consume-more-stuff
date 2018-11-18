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
    console.log(this.props, 'Hello??')
    const match = this.props.match;
    const { id } = this.props.user
    const { items } = this.props
    const { isAuthenticated } = this.props.auth;

    return (
      <div class="pageWrapper">
        <Route exact path={match.path} render={(props) => <PostsBoard items={items} getPostandCommentsById={this.getPostandCommentsById} match={match} props={this.props} />} />
        <Route path={`${match.path}/posts`} component={PostsBoard} />

          <Route path={`${match.path}/:dashboardSelector`} component={Dashboard2} />
          <br /><br />
          {/* <Route path={`${match.path}/new-request`} component={NewRequest} /> */}
          {/* <Route path={`${match.path}/post/:id`} render={(props) => <PostDetail match={match} props={this.props} />} /> */}
          <Route path={`${match.path}/post/:id`} component={PostDetail} />

          <Route path={`/doodoopoop`} component={ProfileData} />

          <Route path={`${match.path}/user/profile/${id}/data`} render={(props) => <ProfileData {...props} id={id} />} />

          <Route path={`/dashboard/new-request`} component={NewRequest} />

          {/* <Route path={`/`} component={PostsBoard} /> */}
          {/* <div id="postings-section-title">All Postings</div>

          <Link to="/post/specificPost">
            <Posts items={items} getPostandCommentsById={this.getPostandCommentsById} />
          </Link> */}
          {/* <Route path="/dashboard2s" component={DashboardLinks} /> */}


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
        <li style={{ padding: "10px" }}>
          <LinkButton to={`${match.path}/user/profile/${id}/data`} title={"Profile"} />
        </li>
        <li style={{ padding: "10px" }}>
          <LinkButton to={`doodoopoop`} title={"Doodoopoop sanity bitch"} />
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

{/* <div className="auth-user-btns">
<LinkButton to="/dashboard2s" title={"dashboard2s"} />

  {isAuthenticated() &&
    <LinkButton to={`/user/profile/${id}/draftposts`} title={"My Drafts Posts"} />}
  <br /><br />

  {isAuthenticated() &&
    <LinkButton to={`/user/profile/${id}/draftcomments`} title={"My Draft Comments"} />}
  <br /><br />
  {isAuthenticated() &&
    <LinkButton to={"/new-request"} title={"New Request"} />}
</div> */}

// export const DashboardLinks = ({ match }) => {
//   return (
//     <div>
//       <ul style={{ listStyleType: "none" }}>
//         <li style={{ padding: "10px" }}>
//         <LinkButton to={`${match.url}/posts`} title={"All Posts"} />
//         </li>
//         <li style={{ padding: "10px" }}>
//           <LinkButton id="my-posts" to={`${match.url}/my-posts`} title={"My Posts"} />
//         </li>
//         <li style={{ padding: "10px" }}>
//           <LinkButton to={`/user/profile/${id}/draftposts`} title={"My Draft Posts"} />
//         </li>
//         <li style={{ padding: "10px" }}>
//           <LinkButton to={`${match.url}/my-commnents`} title={"My Comments"} />
//         </li>
//         <li style={{ padding: "10px" }}>
//           <LinkButton to={`${match.url}/user/profile/${id}/draftcomments`} title={"My Draft Comments"} />
//         </li>
//         <li style={{ padding: "10px" }}>
//           <LinkButton to={`${match.url}/new-request`} title={"New Request"} />
//         </li>
//       </ul>
//     </div>
//   );
// }

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


export default connect(mapStateToProps)(Dashboard);