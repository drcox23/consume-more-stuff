//CLIENT

import React, { Component } from 'react';
import logo from './2cents.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

//Import JSX component files
import Login from './components/forms/LoginForm.jsx';
import PostsBoard from './components/PostsBoard/PostsBoard.jsx';

//Setup for redux
import { connect } from 'react-redux';
import LoginForm from './components/forms/LoginForm.jsx';
import SignupForm from './components/forms/SignupForm.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  //~~~~~~~~Lifecycle Methods~~~~~~~~~~~//
  componentDidMount() {

  }

  //~~~~~~~~App Component Methods~~~~~~~~~//



  //~~~~~~~~App Component - RENDER~~~~~~~~~//
  render() {
    return (
      <div className="App">
        {/* Fonts */}
        <style>

        </style>

        {/* Header */}
        <header className="App-header">
          <div id="headerBar">
            <div id="imgBox">
              <img src={logo} alt="logo" />
            </div>
            <input id="searchBar" type="text" placeholder="Search..." />
          </div>

          {/* Routing Links & Routes */}
          <Router>
            <div id="navbar">

              <div id="linkBtns">

                <Link to="/">
                  <button id="homeBtn" type="button">Home</button>
                </Link>

                <Link to="/login">
                  <button id="loginBtn" type="button">Log In</button>
                </Link>

                <Link to="/signup">
                  <button id="signupBtn" type="button">Sign Up</button>
                </Link>
              </div>

              <div id="component-section">
                <Route exact path="/" component={PostsBoard} />

                <Route path="/login" component={LoginForm} />

                <Route path="/signup" component={SignupForm} />

              </div>

            </div>
          </Router>
        </header>



      </div>

      // <div className="App">
      //   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
      //   </link>

      //   <header className="App-header">

      //     {/* Navigation */}
      //     <img src={logo} alt="logo" />
      //   </header>
      //   <Router>
      //     <div>

      //       {/* Routing Links and Routes */}

      //       <Link to="/">
      //         <button type="button">Home</button>
      //       </Link>

      //       <Link to="/login">
      //         <button type="button">Login <i class="fas fa-sign-in-alt"></i></button>
      //       </Link>

      //       <Route exact path="/" component={PostsBoard} />
      //       <Route path="/login" component={Login} />
      //       {/* <Route path="/login" /> */}

      //     </div>
      //   </Router>
      // </div>
    );
  }
}

export default App;
