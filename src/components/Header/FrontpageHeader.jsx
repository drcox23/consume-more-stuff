import React, { Component } from 'react';
import logo from '../../2cents.png';
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

class FrontpageHeader extends Component {
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
    const { isAuthenticated } = this.props.auth;
    console.log("are we Authed???", isAuthenticated())

    return (
      <div id="navbar">
        {/* Fonts */}
        <style>
          @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500|Poiret+One');
        </style>

        <div style={{zIndex: 4}} id="headerBar">
          <div style={{zIndex: 4}} id="subheader-container">
            {/* imgBox is for resizing the logo with a fixed scale */}
            <div style={{zIndex: 4}} id="imgBox">
              <Link style={{zIndex: 4}} to={'/'} ><img src={logo} alt="logo" /></Link>
            </div>
            <h1 id="app-title"><Link style={{ color: "black" }} to={'/'} >two<span style={{ fontSize: "18px" }}> </span>cents</Link></h1>

          </div>

          {this.props.children}
          <div style={{zIndex: 4}} id="linkBtns">
            {isAuthenticated() && <Link to={"/user/profile"} ><Picture /></Link>}

            {isAuthenticated() &&

              <div className="dropdown">
                <p id="user-greeting">Hello, <Greeting /></p>
                {/* <LinkButton className="dropbtn" to={"/user/profile"} title={<i class="fas fa-user-circle"></i>} onClick={this.goTo.bind(this, 'user/profile')} /> */}

                <div className="dropdown-content">
                  <a href={"/user/profile/myprofile"} className="profile-links" onClick={this.goTo.bind(this, 'home')}>View My Profile</a>

                  <a href={"/user/profile/mydraftposts"} className="profile-links" onClick={this.goTo.bind(this, 'home')}>Draft Posts</a>

                  <a href={"/user/profile/mydraftcomments"} className="profile-links" onClick={this.goTo.bind(this, 'home')}>Draft Comments</a>

                  <a href={"/user/profile/accountcredit"} className="profile-links" onClick={this.goTo.bind(this, 'home')}>Account Credit</a>

                </div>
              </div>
            }

            {/* {isAuthenticated() &&
              <div className="dropdown">
                <LinkButton className="dropbtn" to={"/user/profile"} title={<i class="fas fa-user-circle"></i>} onClick={this.goTo.bind(this, 'user/profile')} />

                <div className="dropdown-content">
                  <a href={"/user/profile/myprofile"} className="profile-links" onClick={this.goTo.bind(this, 'home')}>View My Profile</a>

                  <a href={"/user/profile/mydraftposts"} className="profile-links" onClick={this.goTo.bind(this, 'home')}>Draft Posts</a>

                  <a href={"/user/profile/mydraftcomments"} className="profile-links" onClick={this.goTo.bind(this, 'home')}>Draft Comments</a>

                  <a href={"/user/profile/accountcredit"} className="profile-links" onClick={this.goTo.bind(this, 'home')}>Add Credit</a>

                </div>
              </div>
            } */}

            <LinkButton style={{zIndex: '4 !important'}} to={"/"} title={"HOME"} onClick={this.goTo.bind(this, 'home')} />


            {!isAuthenticated() && <p style={{zIndex: 4}} id="loginBtn" onClick={this.login.bind(this)}>LOGIN</p>}

            {isAuthenticated() && <p id="logoutBtn" onClick={this.logout.bind(this)}>LOGOUT</p>}

          </div>
        </div>
      </div>
    );
  }
}


export default FrontpageHeader;

