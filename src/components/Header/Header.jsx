import React, { Component } from 'react';
import logo from '../../2cents.png';
import '../../App.css';
import Greeting from '../Greeting/Greeting.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Picture from '../Greeting/Picture.jsx';

const LinkButton = (props) => {
  return (
    <Link to={props.to}>
      {/* <button className="navbar-btns">{props.title}</button> */}
      <p className="navbar-btns">{props.title}</p>
    </Link>
  )
}

class Header extends Component {
  constructor(props) {
    super(props);
  }

  //~~~~~~~~Lifecycle Methods~~~~~~~~~~~//
  componentDidMount() {
    // console.log('Header Component')
    //   this.props.dispatch(getAllPosts())
  }

  //~~~~~~~~App Component Methods~~~~~~~~~//
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  getGreeting() {
    this.props.auth.getGreeting();
  }

  //~~~~~~~~App Component - RENDER~~~~~~~~~//
  render() {
    // console.log(this.props.auth, '?')
    const { isAuthenticated } = this.props.auth;
    console.log("are we Authed???", isAuthenticated())

    return (
      <div id="navbar">
        {/* Fonts */}
        <style>
          @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500|Poiret+One');
        </style>

        <div id="headerBar">
          <div id="subheader-container">
            {/* imgBox is for resizing the logo with a fixed scale */}
            <div id="imgBox">
              <Link to={'/'} ><img src={logo} alt="logo" /></Link>
            </div>
            <h1 id="app-title">two cents</h1>

            {/* Search Bar */}
            {/* <input id="searchBar" type="text" placeholder="Search..." /> */}
          </div>

          {/* Navigation Links */}

          {/* {props.children}
      </div>
    )
  } */}

          {/* export default Header */}

          {this.props.children}
          <div id="linkBtns">
            {isAuthenticated() && <p id="user-greeting">Hello, <Greeting /></p>}
            {isAuthenticated() && <p id="profile-pic"><Picture /></p>}

            <LinkButton to={"/"} title={"HOME"} onClick={this.goTo.bind(this, 'home')} />

            {isAuthenticated() && <LinkButton to={"/user/profile"} title={"MY PROFILE"} onClick={this.goTo.bind(this, 'user/profile')} />}

            {/* {!isAuthenticated() && <button id="loginBtn" onClick={this.login.bind(this)}>LOGIN</button>}

            {isAuthenticated() && <button id="logoutBtn" onClick={this.logout.bind(this)}>LOGOUT</button>} */}
            {!isAuthenticated() && <p id="loginBtn" onClick={this.login.bind(this)}>LOGIN</p>}

            {isAuthenticated() && <p id="logoutBtn" onClick={this.logout.bind(this)}>LOGOUT</p>}

          </div>
        </div>
      </div>
    );
  }
}


export default Header;

