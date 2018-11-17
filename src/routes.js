import React, { Component } from 'react';
import { Route, Router, Switch, Link, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './Dashboard.jsx';
import Home from './Home/Home.js';
import Callback from './Callback/Callback.js';
import Auth from './Auth/Auth.js';
import history from './history.js';
import PostsBoard from './components/PostsBoard/PostsBoard.jsx';
import LoginForm from './components/forms/LoginForm.jsx';
import SignupForm from './components/forms/SignupForm.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';

import Header from './components/Header/Header.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';
import NewRequest from './components/forms/NewRequest.jsx';
import Footer from './components/Footer/Footer.jsx';
import NotFound from './components/Error/404.jsx';
import Dashboard from './Dashboard.jsx';
import { Dashboard2s } from './components/UserProfile/DashboardLinks/DashboardLinks.jsx';

import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/reducers.js';

const auth = new Auth();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated()
      ? <Component {...props} />
      : document.location.href="https://twocentsforyou.auth0.com/login?state=g6Fo2SAwQ2czaHZEVUs4ZnRfSV9jejFQWWJrcnlrTVJpNjJUaqN0aWTZMmdhRm8yU0JHTFhZME5IUTFWMWhHWnpGTWRGTlBNa2xpUkRsV05IZFhPRGRaYkVGWFNBo2NpZNkgeGNPSE8zd2JjUjVIcEF0TXh3VzQxOWo1SzdpampPQUU&client=xcOHO3wbcR5HpAtMxwW419j5K7ijjOAE&protocol=oauth2&response_type=token%20id_token&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=openid%20profile%20read%3Ausers&audience=https%3A%2F%2Ftwocentsforyou.auth0.com%2Fapi%2Fv2%2F&nonce=-IxoIAiXXrs6YjbdptizcbpXsq~_PVK8&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS44LjEifQ%3D%3D"
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

          <PrivateRoute path="/dashboard" render={(props) => <Dashboard auth={auth} {...props} />} />

          <Route path="/signup" component={SignupForm} />

          <Route path="/home" render={(props) => <Home auth={auth} {...props} />}/>

          <Route path='/post/:id' component={PostDetail} />

          <Route path='/dashboard/post/:id' component={PostDetail} />

          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }} />

          <Route path="/user/profile" component={UserProfile} />

          <Route path="/new-request" component={NewRequest} />

          <Route path="/dashboard2s" component={Dashboard2s} />

          {/* <Route component={NotFound}/> */}

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