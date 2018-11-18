import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Dashboard.css';
import '../src/components/Header/Header.css';
import { connect } from 'react-redux';
import { getPostandCommentsById, getAllPosts, getAll, addUserToDB } from './actions/actions.js';
import NewRequest from './components/forms/NewRequest.jsx';
import PostsBoard from './components/PostsBoard/PostsBoard.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';
import jwtDecode from 'jwt-decode';

const LinkButton = (props) => {
  return (
    <Link to={props.to}>
      {/* <button className="auth-navbar-btns">{props.title}</button> */}
      <p className="auth-navbar-btns">{props.title}</p>
    </Link>
  )
}

// const id = jwtDecode(localStorage.getItem('id_token'))

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    if (!this.props.auth.isAuthenticated()) {
      this.props.dispatch(getAllPosts())
    } else {
      const  { name } = jwtDecode(localStorage.getItem('id_token'))
      const  nickname = jwtDecode(localStorage.getItem('id_token'))
      // console.log("can i see the user id???", id)
      this.props.dispatch(getAll(name))
      this.props.dispatch(addUserToDB(nickname))
    }
  }

  getPostandCommentsById = (props) => {
    this.props.dispatch(
      getPostandCommentsById(props),
    )
  }

  render() {
    const match = this.props.match;
    const { id } = this.props.user
    const { items } = this.props
    const { isAuthenticated } = this.props.auth;
    console.log('whats the props', this.props)

    return (
      <div class="pageWrapper">
        <Route exact path={match.path} render={(props) => <PostsBoard items={items} getPostandCommentsById={this.getPostandCommentsById} match={match} props={this.props} />} />

        <Route path={`${match.path}/posts`} component={PostsBoard} />

        <Route path={`${match.path}/:dashboardSelector`} component={Dashboard2} />

        <br /><br />

        <Route path={`${match.path}/post/:id`} component={PostDetail} />
        <Route path={`/dashboard/new-request`} component={NewRequest} />

        <div className="auth-user-btns">

          {isAuthenticated() && <div>
            {/* <ul> */}
            {/* <li> */}
            <LinkButton id="my-posts" to={`${match.url}/my-posts`} title={"My Posts"} />
            {/* </li> */}
            {/* <li> */}
            <LinkButton to={`/user/profile/${id}/draftposts`} title={"My Draft Posts"} />
            {/* </li> */}
            {/* <li> */}
            <LinkButton to={`${match.url}/my-commnents`} title={"My Comments"} />
            {/* </li> */}
            {/* <li> */}
            <LinkButton to={`/user/profile/${id}/draftcomments`} title={"My Draft Comments"} />
            {/* </li> */}
            {/* <li> */}
            <LinkButton to={`${match.url}/new-request`} title={"New Request"} />
            {/* </li> */}
            {/* </ul> */}
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

export const poop = ({ match }) => {
  return (
    <div>POOP</div>
  )
}

export default connect(mapStateToProps)(Dashboard);