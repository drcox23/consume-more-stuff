import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App.js';
import Home from './Home/Home.js';
import Callback from './Callback/Callback.js';
import Auth from './Auth/Auth.js';
import history from './history.js';
import PostsBoard from './components/PostsBoard/PostsBoard.jsx';
import LoginForm from './components/forms/LoginForm.jsx';
import SignupForm from './components/forms/SignupForm.jsx';
import NotFound from './components/Error/404.jsx';

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
          <Switch>
            <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />

            <Route path="/signup" component={SignupForm} />

            <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />

            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }} />

            <Route component={NotFound}/>

          </Switch>
        </div>
      </Provider>
    </Router>
  );
}


{/* <Route exact path="/" render={(props) => <PostsBoard {...this.props} />} /> */ }
{/* <Route path="/login" component={LoginForm} />
<Route path="/signup" component={SignupForm} /> */}