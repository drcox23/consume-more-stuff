//CLIENT

import React, { Component } from 'react';
import logo from './2cents.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

//Import JSX component files
import Login from './components/forms/LoginForm.jsx';
import PostsBoard from './components/PostsBoard/PostsBoard.jsx';
import LoginForm from './components/forms/LoginForm.jsx';
import SignupForm from './components/forms/SignupForm.jsx';

//Setup for redux
import { connect } from 'react-redux';

const Header = (props) => {
  return (

    <div id="headerBar">

      {/* imgBox is for resizing the logo with a fixed scale */}
      <div id="imgBox">
        <img src={logo} alt="logo" />
      </div>

      {/* Search Bar */}
      <input id="searchBar" type="text" placeholder="Search..." />

      {/* Navigation Links */}
      {props.children}

    </div>
  )
}

const LinkButton = (props) => {
  return (
    <Link to={props.to}>
      <button>{props.title}</button>
    </Link>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  //~~~~~~~~Lifecycle Methods~~~~~~~~~//
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
        {/* <header className="App-header">
          <div id="headerBar">
            <div id="imgBox">
              <img src={logo} alt="logo" />
            </div>
            <input id="searchBar" type="text" placeholder="Search..." />
          </div> */}


        {/* Routing Links & Routes */}
        <Router>
          <div id="navbar">
            <Header>
              <div id="linkBtns">

                <LinkButton to={"/"} title={"Home"} />
                {/* <button id="homeBtn" type="button">Home</button>
              </LinkButton> */}

                <LinkButton to={"/login"} title={"Login"} />
                {/* <button id="loginBtn" type="button">Log In</button>
              </LinkButton> */}

                <LinkButton to={"/signup"} title={"Sign Up"} />
                {/* <button id="signupBtn" type="button">Sign Up</button>
              </LinkButton> */}
              </div>
            </Header>
            <div id="component-section">
              <Route exact path="/" component={PostsBoard} />
              <Route path="/login" component={LoginForm} />
              <Route path="/signup" component={SignupForm} />
            </div>

          </div>
        </Router>
        {/* </header> */}

      </div>
    );
  }
}

export default App;
