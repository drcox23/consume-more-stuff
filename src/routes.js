import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

//Header
// import logo from './2cents.png';
// import Header from './components/Header/Header.jsx';
// import Profile from './components/Profile/Profile.jsx';

//Components
import App from './App.js';
import Home from './Home/Home.js';
import Callback from './Callback/Callback.js';
import Auth from './Auth/Auth.js';
import history from './history.js';
import PostsBoard from './components/PostsBoard/PostsBoard.jsx';
import LoginForm from './components/forms/LoginForm.jsx';
import SignupForm from './components/forms/SignupForm.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';

import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/reducers.js';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

const store = createStore(
  reducers,
  compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const LinkButton = (props) => {
  return (
    <Link to={props.to}>
      <button className="navbar-btns">{props.title}</button>
    </Link>
  )
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        <div>
          {/* <Header logo={logo} children={this.props.children}> 
              <div id="linkBtns">
                {this.props.auth.isAuthenticated() &&
                  <p id="user-greeting">Hello, <Profile /></p>}

                <LinkButton to={"/"} title={"Home"} onClick={this.goTo.bind(this, 'home')} />

                {!this.props.auth.isAuthenticated() && <button id="loginBtn" onClick={this.login.bind(this)}>Login</button>}

                {this.props.auth.isAuthenticated() &&
                  <LinkButton to={"/my-profile"} title={"My Profile"} onClick={this.goTo.bind(this, 'profile')} />}

                {this.props.auth.isAuthenticated() &&
                  <button id="logoutBtn" onClick={this.logout.bind(this)}>Log Out</button>}
              </div>
          </Header> */}
          <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />

          <Route path="/signup" component={SignupForm} />

          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />

          <Route path='/post/:id' component={PostDetail} />

          <Route path='/user/profile/:id' component={UserProfile} />

          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }} />

        </div>
      </Provider>
    </Router>
  );
}


{/* <Route exact path="/" render={(props) => <PostsBoard {...this.props} />} /> */ }
{/* <Route path="/login" component={LoginForm} />
<Route path="/signup" component={SignupForm} /> */}