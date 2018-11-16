import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
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

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        <div>

          <Header auth={auth} props={store} />

          {/* <Switch> */}

          <Route exact path="/" render={(props) => <Dashboard auth={auth} {...props} />} />

          <Route path="/dashboard" render={(props) => <PostsBoard auth={auth} {...props} />} />

          <Route path="/signup" component={SignupForm} />

          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />

          <Route path='/post/:id' component={PostDetail} />

          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }} />

          <Route path="/user/profile" component={UserProfile} />

          <Route path="/new-request" component={NewRequest} />

          {/* <Route component={NotFound}/> */}

          {/* </Switch> */}

          <Footer />
          
        </div>
      </Provider>
    </Router>
  );
}


{/* <Route exact path="/" render={(props) => <PostsBoard {...this.props} />} /> */ }
{/* <Route path="/login" component={LoginForm} />
<Route path="/signup" component={SignupForm} /> */}