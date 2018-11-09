import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Import JSX component files
import Login from './components/forms/LoginForm.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">CMS</header>
        <div id="Project-header">
          <div>Home</div>
        </div>

        {/* Routing Links and Routes */}
        <Router>
          <div>
            <div id="Nav-header">
              <div id="nav-bar">
                {/* Links */}

                <Link to="/login">
                  <button type="button">Login</button>
                </Link>


                <Route path="/login" component={Login} />
              </div>
            </div>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
