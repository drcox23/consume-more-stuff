import React, { Component } from 'react';
import logo from '../../2cents.png';
// import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Import JSX component files


const bodyStyle = {
  backgroundColor: 'lightcoral',
  width: '100%',
  height: '100%',
  margin: '0'
}

const imgStyle = {
  margin: '30px',
  width: '100px',
}

class Authenticated extends Component {
  render() {
    return (
      <div style={bodyStyle} className="App">
        <header className="App-header">
          <img style={imgStyle} src={logo} alt="logo" />
        </header>

        {/* Routing Links and Routes */}
        <Router>
          <div>
            <div id="Nav-header">
              <div id="nav-bar">
                {/* Links */}

                <Link to="/">
                  <button type="button">Home</button>
                </Link>

                <Link to="/">
                  <button type="button">Logout</button>
                </Link>

                <Route path="/" />

              </div>
            </div>
          </div>
        </Router>
ASKDLKSJDLKSJ
      </div>
    );
  }
}

export default Authenticated;
