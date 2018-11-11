//CLIENT - UNAUTHENTICATED USER VIEW

import React, { Component } from 'react';
import logo from './2cents.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

//Import JSX component files
import PostsBoard from './components/PostsBoard/PostsBoard.jsx';

//Setup for redux
import { connect } from 'react-redux';
import { getAllPosts } from './actions/actions.js'
import PostDetail from './components/PostDetail/PostDetail';

const Header = (props) => {
  return (
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
      {props.children}
    </div>
  )
}

const LinkButton = (props) => {
  return (
    <Link to={props.to}>
      <button className="navbar-btns">{props.title}</button>
    </Link>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  //~~~~~~~~Lifecycle Methods~~~~~~~~~~~//
  componentDidMount() {
    this.props.dispatch(getAllPosts())
  }

  getAllPosts() {
    console.log("IM SETTING THE STATE BACK TO ALL");
    this.props.dispatch(
      getAllPosts()
    )
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

  //~~~~~~~~App Component - RENDER~~~~~~~~~//
  render() {
    const { isAuthenticated } = this.props.auth;
    console.log("isAuthenticated:", isAuthenticated());

    return (
      <div className="App">
        <div></div>
        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Glass+Antiqua|Kodchasan" rel="stylesheet" />

        {/* Routing Links & Routes */}
        <Router>
          <div id="navbar">
            <Header>
              <div id="linkBtns">
                <LinkButton to={"/"} title={"Home"} onClick={this.goTo.bind(this, 'home')} />

                {!isAuthenticated() && <button id="loginBtn" onClick={this.login.bind(this)}>Login</button>}

                {isAuthenticated() &&
                  <button id="logoutBtn" onClick={this.logout.bind(this)}>Log Out</button>}
              </div>
            </Header>
            <Route exact path="/" render={(props) => <PostsBoard {...this.props} />} />
            <Route path="/post/specificPost" component={PostDetail} />
          </div>
        </Router>

        <footer>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
          </link>
          <i class="fab fa-github-alt fa-2x">
            <a href="https://github.com/maymc/consume-more-stuff" target="_blank"> Visit our Github!</a>
          </i>
        </footer>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(App);
