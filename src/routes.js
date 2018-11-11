import React from 'react';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import PostsBoard from './components/PostsBoard/PostsBoard.jsx';
import LoginForm from './components/forms/LoginForm.jsx';
import SignupForm from './components/forms/SignupForm.jsx';

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
          <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
          {/* <Route path="/login" component={LoginForm} /> */}
          <Route path="/signup" component={SignupForm} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
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