import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './components/PostsBoard/PostsBoard.css';
import { connect } from 'react-redux';
import Posts from './components/PostsBoard/posts/posts.jsx';
import { getPostandCommentsById, getAllPosts } from './actions/actions.js';
import NewRequest from './components/forms/NewRequest.jsx';
import PostsBoard from './components/PostsBoard/PostsBoard.jsx';
// import { Dashboard2s } from './components/UserProfile/DashboardLinks/DashboardLinks.jsx';

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

          <Route path={`/`} component={PostsBoard} />
          {/* <div id="postings-section-title">All Postings</div>

          <Link to="/post/specificPost">
            <Posts items={items} getPostandCommentsById={this.getPostandCommentsById} />
          </Link> */}
          <Route path="/dashboard2s" component={Dashboard2s} />

        </div>


        <div className="auth-user-btns">

        <Dashboard2s match={match}/>

        <LinkButton to="/dashboard2s" title={"Dashboard2s"} />
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
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:dashboardSelector`} component={Dashboard2} />
      <Route path={`${match.path}/poop`} component={poop} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

export const Dashboard2 = ({ match }) => {
  return (
    <div>
        {console.log(match, ' this is match though')}
      <h3>{match.params.dashboardSelector}</h3>
    </div>
  );
}

export const poop = ({ match }) => {
    return (
        <div>POOP</div>
    )
}

export default connect(mapStateToProps)(Dashboard);