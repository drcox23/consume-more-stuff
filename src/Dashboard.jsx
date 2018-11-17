import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Dashboard.css';
import { connect } from 'react-redux';
import { getPostandCommentsById, getAllPosts } from './actions/actions.js';
import NewRequest from './components/forms/NewRequest.jsx';
import PostsBoard from './components/PostsBoard/PostsBoard.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';

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
      <div class="pageWrapper">
        <Route exact path={match.path} render={(props) => <PostsBoard items={items} getPostandCommentsById={this.getPostandCommentsById} match={match} props={this.props} />} />
        <Route path={`${match.path}/posts`} component={PostsBoard} />

          <Route path={`${match.path}/:dashboardSelector`} component={Dashboard2} />
          <br /><br />
          <Route path={`${match.path}/newrequest`} component={NewRequest} />
          {/* <Route path={`${match.path}/post/:id`} render={(props) => <PostDetail match={match} props={this.props} />} /> */}
          <Route path={`${match.path}/post/:id`} component={PostDetail} />

          <Route path={`/dashboard/new-request`} component={NewRequest} />

          {/* <Route path={`/`} component={PostsBoard} /> */}
          {/* <div id="postings-section-title">All Postings</div>

          <Link to="/post/specificPost">
            <Posts items={items} getPostandCommentsById={this.getPostandCommentsById} />
          </Link> */}
          {/* <Route path="/dashboard2s" component={DashboardLinks} /> */}


        <div className="auth-user-btns">

          {isAuthenticated() && <DashboardLinks match={this.props.match}/>}

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

export const DashboardLinks = ({ match }) => {
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        <li style={{ padding: "10px" }}>
        <LinkButton to={`${match.url}/posts`} title={"All Posts"} />
        </li>
        <li style={{ padding: "10px" }}>
          <LinkButton id="myRequestsBtn" to={`${match.url}/components`} title={"My Requests"} />
        </li>
        <li style={{ padding: "10px" }}>
          <LinkButton to={`${match.url}/props-v-state`} title={"My Comments"} />
        </li>
        <li style={{ padding: "10px" }}>
          <LinkButton to={`${match.url}/newrequest`} title={"New Request"} />
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


export default connect(mapStateToProps)(Dashboard);