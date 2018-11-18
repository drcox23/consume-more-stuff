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

import Header from './components/Header/Header.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';
import NewRequest from './components/forms/NewRequest.jsx';
import Footer from './components/Footer/Footer.jsx';
import NotFound from './components/Error/404.jsx';
import Dashboard from './Dashboard.jsx';

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

          <Header auth={auth} props={store} />

          <Switch>

          <Route exact path="/" render={(props) => ( !auth.isAuthenticated() ? 
          (<PostsBoard auth={auth} {...props} /> ) : (<Redirect to="/dashboard" />))}/>

          <Route path="/dashboard" render={(props) => ( auth.isAuthenticated() ? 
          (<Dashboard auth={auth} {...props} /> ) : (<Redirect to="/callbacklogin" />))}/>

          <Route path="/signup" component={SignupForm} />

          <PrivateRoute path="/home" render={(props) => <Home auth={auth} {...props} />}/>

          <Route path="/callbacklogin" render={(props) => <CallbackLogin auth={auth} {...props} />}/>

          <Route path="/post/:id" render={(props) => ( !auth.isAuthenticated() ? 
          (<PostDetail auth={auth} {...props} /> ) : (<Redirect to="/dashboard" />))}/>

          <Route path='/dashboard/post/:id' component={PostDetail} />
          <Route path='/dashboard/new-request' component={NewRequest} />

          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }} />

          <Route path="/user/profile" render={(props) => ( auth.isAuthenticated() ? 
          (<UserProfile auth={auth} {...props} /> ) : (<Redirect to="/callbacklogin" />))}/>

          <Route component={NotFound}/>

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