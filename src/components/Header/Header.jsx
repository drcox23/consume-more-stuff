import React, { Component } from 'react';
import logo from '../../2cents.png';
import '../../App.css';
import Greeting from '../Greeting/Greeting.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const LinkButton = (props) => {
    return (
      <Link to={props.to}>
        <button className="navbar-btns">{props.title}</button>
      </Link>
    )
  }

class Header extends Component {
    constructor(props) {
      super(props);
    }
  
    //~~~~~~~~Lifecycle Methods~~~~~~~~~~~//
    componentDidMount() {
      console.log('Header Component')
    //   this.props.dispatch(getAllPosts())
    }
  
    // getAllPosts() {
    //   console.log("App.js - Setting state back to all");
    //   this.props.dispatch(
    //     getAllPosts()
    //   )
    // }
  
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
    console.log(this.props.auth, '?')
        const { isAuthenticated } = this.props.auth;

      return (
        <div id="navbar">
        <div id="headerBar">
  
        <div id="subheader-container">
          {/* imgBox is for resizing the logo with a fixed scale */}
          <div id="imgBox">
            <img src={logo} alt="logo" />
          </div>
  
          {/* Search Bar */}
          <input id="searchBar" type="text" placeholder="Search..." />
        </div>
  
        {/* Navigation Links */}
        {this.props.children}
      </div>
                    <div id="linkBtns">
                    {isAuthenticated() &&
                      <p id="user-greeting">Hello, <Greeting /></p>}
    
                    <LinkButton to={"/"} title={"Home"} onClick={this.goTo.bind(this, 'home')} />
    
                    {!isAuthenticated() && <button id="loginBtn" onClick={this.login.bind(this)}>Login</button>}
    
                    {isAuthenticated() &&
                      <LinkButton to={"/user/profile"} title={"My Profile"} onClick={this.goTo.bind(this, 'user/profile')} />}
    
                    {isAuthenticated() &&
                      <button id="logoutBtn" onClick={this.logout.bind(this)}>Log Out</button>}
    
    
                  </div>
                  </div>
      );
    }
  }

  
  export default Header;
  