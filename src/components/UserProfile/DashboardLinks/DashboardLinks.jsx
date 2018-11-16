import React from 'react';
import { Route, Router, Switch, Link } from 'react-router-dom';

export const Dashboard2s = ({ match }) => {
    return (
      <div>
        <h2>Dashboard2s</h2>
        {console.log(match, 'what is being console logged here?')}
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Route path={`${match.path}/:dashboardSelector`} component={Dashboard2} />
        <Route path={`${match.path}/poop`} component={poop} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
  
export const Dashboard2 = ({ match }) => {
    return (
      <div>
          {console.log(match, ' this is match though')}
        <h3>{match.params.dashboardSelector}</h3>
      </div>
    );
  }

  export const poop = ({ match }) => {
      return (
          <div>POOP</div>
      )
  }