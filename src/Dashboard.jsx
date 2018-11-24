import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Dashboard.css';
import '../src/components/Header/Header.css';
import { connect } from 'react-redux';
import { getPostandCommentsById, getAllPosts, getAll, addUserToDB } from './actions/actions.js';
import NewRequest from './components/forms/NewRequest.jsx';
import PostsBoard from './components/PostsBoard/PostsBoard.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';
import MyPosts from './components/UserProfile/MyPosts/MyPosts.jsx';
import jwtDecode from 'jwt-decode';
import NotFound from './components/Error/404.jsx';
import ProfileData from './components/UserProfile/ProfileData/ProfileData.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';
import MyComments from './components/PostDetail/comments/MyComments.jsx';
import AddNewComment from './components/forms/AddNewComment';

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
      const { name } = jwtDecode(localStorage.getItem('id_token'))
      const nickname = jwtDecode(localStorage.getItem('id_token'))
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
    const match = this.props.match.path;
    const id = this.props.user.id;
    const { items } = this.props;
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="pageWrapper">

        <Switch>
          <Route exact path={match} render={() => <PostsBoard items={items} getPostandCommentsById={this.getPostandCommentsById} match={match} props={this.props} />} />

          <Route exact path={`${match}/myposts`} component={() => <MyPosts props={this.props} />} />

          <Route exact path={`${match}/posts`} component={PostsBoard} />

          <Route exact path={`${match}/new-request`} render={(props) => <NewRequest {...props} items={items} />} />

          <Route exact path={`${match}/post/:id`} render={(props) => <PostDetail {...props} auth={isAuthenticated} />} />

          <Route exact path={`${match}/my-comments`} render={() => <MyComments items={items} userComments={this.props.userComments}/>} />
          
          <Route exact path={`${match}/post/:id/add-comment`} component={AddNewComment} />

          <Route component={NotFound} />

        </Switch>

        <div className="auth-user-btns">

          {isAuthenticated() &&
            <div>
              <LinkButton to={`${match}/myposts`} title={"My Posts"} />
              <LinkButton to={`/user/profile/${id}/draftposts`} title={"My Draft Posts"} />
              <LinkButton to={`${match}/my-comments`} title={"My Comments"} />
              <LinkButton to={`/user/profile/${id}/draftcomments`} title={"My Draft Comments"} />
              <LinkButton to={`${match}/new-request`} title={"New Request"} />
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
    draftComments: state.draftComments,
    type: state.type,
    detailedItem: state.detailedItem,
    comments: state.comments,
    userComments: state.userComments
  }
}

export default connect(mapStateToProps)(Dashboard);