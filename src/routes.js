import React, { Component } from 'react';
import { Route, Router, Switch, Link, Redirect, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './Home/Home.js';
import Callback from './Callback/Callback.js';
import Auth from './Auth/Auth.js';
import history from './history.js';
import PostsBoard from './components/PostsBoard/PostsBoard.jsx';
import LoginForm from './components/forms/LoginForm.jsx';
import SignupForm from './components/forms/SignupForm.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';
import CallbackLogin from './Callback/CallbackLogin.jsx';
import Play from './components/Play/Play.jsx';

import Header from './components/Header/Header.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';

import NewRequest from './components/forms/NewRequest.jsx';
import EditDraftPostForm from './components/forms/EditDraftPostForm.jsx';

import Footer from './components/Footer/Footer.jsx';
import NotFound from './components/Error/404.jsx';
import Dashboard from './Dashboard.jsx';
import { ScrollToTop } from './components/Helper/ScrollToTop.jsx';

import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/reducers.js';

const auth = new Auth();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated()
      ? <PostsBoard auth={auth} {...props} />
      : (auth.login())
  )} />
)

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

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        <div>

          <ScrollToTop />

          <Header auth={auth} props={store} />

          <Switch>

            <Route exact path="/" render={(props) => (!auth.isAuthenticated() ?
              (<Play auth={auth} store={store} {...props} />) : (<Redirect to="/dashboard" />))} />

            <Route path="/dashboard" render={(props) => (auth.isAuthenticated() ?
              (<Dashboard auth={auth} {...props} />) : (<Redirect to="/callbacklogin" />))} />

            <Route path="/signup" component={SignupForm} />

            <PrivateRoute path="/home" render={(props) => <Home auth={auth} {...props} />} />

            <Route path="/callbacklogin" render={(props) => <CallbackLogin auth={auth} {...props} />} />

            <Route path="/post/:id" render={(props) => (!auth.isAuthenticated() ?
              (<PostDetail auth={auth.isAuthenticated} {...props} />) : (<Redirect to="/dashboard" />))} />

            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }} />

            <Route path="/user/profile" render={(props) => (auth.isAuthenticated() ?
              (<UserProfile auth={auth} {...props} />) : (<Redirect to="/callbacklogin" />))} />

            <Route path='/edit/draftpost/:id' component={EditDraftPostForm} />

            <Route component={NotFound} />

            {/* just in case anything breaks for the routes below */}
            {/* <Route path={`/user/profile/:id/data`} render={(props) => <ProfileData {...props} />} />

          <Route path={`/user/profile/:id/draftposts`} render={(props) => <DraftPosts {...props} />} />

          <Route path={`/user/profile/:id/draftcomments`} render={(props) => <DraftComments {...props} />} />

          <Route path={`/user/profile/:id/accountcredit`} render={(props) => <AddAccountCredit {...props} />} /> */}

          </Switch>

          <Footer />

        </div>
      </Provider>
    </Router>
  );
}

{/* <Route exact path="/" render={(props) => <PostsBoard {...this.props} />} /> */ }
{/* <Route path="/login" component={LoginForm} />
<Route path="/signup" component={SignupForm} /> */}