import React from 'react';
import { Route, Router, Switch, Link } from 'react-router-dom';

export const Dashboard2s = ({ match }) => {
    return (
      <div>
LOG IN DUMMY
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