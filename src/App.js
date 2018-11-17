<<<<<<< HEAD
// //CLIENT - UNAUTHENTICATED USER VIEW

// import React, { Component } from 'react';
// import logo from './2cents.png';
// import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import axios from 'axios';
// import jwtDecode from 'jwt-decode';

// //Import JSX component files
// import Header from './components/Header/Header.jsx'
// import PostsBoard from './components/PostsBoard/PostsBoard.jsx';
// import PostDetail from './components/PostDetail/PostDetail.jsx';
// import UserProfile from './components/UserProfile/UserProfile.jsx';
// import NewRequest from './components/forms/NewRequest.jsx';

// //Setup for redux
// import { connect } from 'react-redux';
// import { getAllPosts, getAll } from './actions/actions.js'
// import Greeting from './components/Greeting/Greeting.jsx';

// // const Header = (props) => {
// //   console.log("props.children:", props.children);
// //   return (
// //     <div id="headerBar">

// //        <div id="subheader-container">
// //          {/* imgBox is for resizing the logo with a fixed scale */}
// //          <div id="imgBox">
// //            <img src={logo} alt="logo" />
// //          </div>

// //          {/* Search Bar */}
// //          <input id="searchBar" type="text" placeholder="Search..." />
// //        </div>

// //        {/* Navigation Links */}
// //        {props.children}
// //      </div>
// //    )
// //  }

// const LinkButton = (props) => {
//   return (
//     <Link to={props.to}>
//       <button className="navbar-btns">{props.title}</button>
//     </Link>
//   )
// }


// class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   //~~~~~~~~Lifecycle Methods~~~~~~~~~~~//
//   componentDidMount() {
//     if (!this.props.auth.isAuthenticated()) {
//       this.props.dispatch(getAllPosts())
//     } else {
//       const { nickname } = jwtDecode(localStorage.getItem('id_token'))
//       this.props.dispatch(getAll(nickname))
//     }
//   }

//   // getAllPosts() {
//   //   console.log("App.js - Setting state back to all");
//   //   this.props.dispatch(
//   //     getAllPosts()
//   //   )
//   // }

//   //~~~~~~~~App Component Methods~~~~~~~~~//
//   goTo(route) {
//     this.props.history.replace(`/${route}`)
//   }

//   login() {
//     this.props.auth.login();
//   }

//   logout() {
//     this.props.auth.logout();
//   }

//   getGreeting() {
//     this.props.auth.getGreeting();
//   }

//   //~~~~~~~~App Component - RENDER~~~~~~~~~//
//   render() {
//     const { isAuthenticated } = this.props.auth;
//     console.log("isAuthenticated:", isAuthenticated());
//     console.log(this.props, 'Props');

//     return (
//       <div className="App">
//         <div>{console.log(this.props, 'hello?')}</div>
//         <div></div>
//         {/* Fonts */}
//         <link href="https://fonts.googleapis.com/css?family=Kodchasan|Lato|Quicksand|Raleway" rel="stylesheet" />

//         {/* Routing Links & Routes */}
//         <Router>
//           <div id="navbar">
//             <Header children={this.props.children} logo={logo}>
//               <div id="linkBtns">
//                 {isAuthenticated() &&
//                   <p id="user-greeting">Hello, <Greeting /></p>}

//                 <LinkButton to={"/"} title={"HOME"} onClick={this.goTo.bind(this, 'home')} />

//                 {!isAuthenticated() && <button id="loginBtn" onClick={this.login.bind(this)}>LOGIN</button>}

//                 {isAuthenticated() &&
//                   <LinkButton to={`/user/profile/${this.props.user.id}`} title={"MY PROFILE"} onClick={this.goTo.bind(this, 'user/profile')} />}

//                 {isAuthenticated() &&
//                   <button id="logoutBtn" onClick={this.logout.bind(this)}>LOGOUT</button>}


//               </div>
//             </Header>
//             <Route exact path="/" render={(props) => <PostsBoard {...this.props} />} />
//             <Route path="/post/:id" component={PostDetail} />
//             {/* <Route path='/user/profile/:id' component={() => <UserProfile {...this.props} />} /> */}
//             <Route path="/user/profile/:id" component={UserProfile} />
//             <Route path="/new-request" component={NewRequest} />
//             {/* <Route path="/my-comments" component={MyComments} /> */}
//           </div>
//         </Router>

//         <footer>
//           <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous">
//           </link>
//           <i className="fab fa-github-alt fa-2x">
//             <a href="https://github.com/maymc/consume-more-stuff" target="_blank"> Visit our Github!</a>
//           </i>
//         </footer>
//       </div>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//     items: state.items,
//     user: state.user,
//     draftPosts: state.draftPosts,
//     draftComments: state.draftComments
//   }
// }

// export default connect(mapStateToProps)(App);
=======
//CLIENT - UNAUTHENTICATED USER VIEW

import React, { Component } from 'react';
import logo from './2cents.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

//Import JSX component files
import Header from './components/Header/Header.jsx'
import PostsBoard from './components/PostsBoard/PostsBoard.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';
import NewRequest from './components/forms/NewRequest.jsx';

//Setup for redux
import { connect } from 'react-redux';
import { getAllPosts, getAll } from './actions/actions.js'
import Greeting from './components/Greeting/Greeting.jsx';

// const Header = (props) => {
//   console.log("props.children:", props.children);
//   return (
//     <div id="headerBar">

//        <div id="subheader-container">
//          {/* imgBox is for resizing the logo with a fixed scale */}
//          <div id="imgBox">
//            <img src={logo} alt="logo" />
//          </div>

//          {/* Search Bar */}
//          <input id="searchBar" type="text" placeholder="Search..." />
//        </div>

//        {/* Navigation Links */}
//        {props.children}
//      </div>
//    )
//  }

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
    if (!this.props.auth.isAuthenticated()) {
      this.props.dispatch(getAllPosts())
    } else {
      const { nickname } = jwtDecode(localStorage.getItem('id_token'))
      this.props.dispatch(getAll(nickname))
    }
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
    const { isAuthenticated } = this.props.auth;
    console.log("isAuthenticated:", isAuthenticated());
    console.log(this.props, 'Props');

    return (
      <div className="App">
        <div>{console.log(this.props, 'hello?')}</div>
        <div></div>
        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Kodchasan|Lato|Quicksand|Raleway" rel="stylesheet" />

        {/* Routing Links & Routes */}
        <Router>
          <div id="navbar">
            <Header children={this.props.children} logo={logo}>
              <div id="linkBtns">
                {isAuthenticated() &&
                  <p id="user-greeting">Hello, <Greeting /></p>}

                <LinkButton to={"/"} title={"HOME"} onClick={this.goTo.bind(this, 'home')} />

                {!isAuthenticated() && <button id="loginBtn" onClick={this.login.bind(this)}>LOGIN</button>}

                {isAuthenticated() &&
                  <LinkButton to={`/user/profile/${this.props.user.id}`} title={"MY PROFILE"} onClick={this.goTo.bind(this, 'user/profile')} />}

                {isAuthenticated() &&
                  <button id="logoutBtn" onClick={this.logout.bind(this)}>LOGOUT</button>}


              </div>
            </Header>
            <Route exact path="/" render={(props) => <PostsBoard {...this.props} />} />
            <Route path="/post/:id" component={PostDetail} />
            <Route path='/user/profile/:id' component={() => <UserProfile {...this.props} />} />
            <Route path="/new-request" component={NewRequest} />
            {/* <Route path="/my-comments" component={MyComments} /> */}
          </div>
        </Router>

        <footer>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous">
          </link>
          <i className="fab fa-github-alt fa-2x">
            <a href="https://github.com/maymc/consume-more-stuff" target="_blank"> Visit our Github!</a>
          </i>
        </footer>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items,
    user: state.user,
    draftPosts: state.draftPosts,
    draftComments: state.draftComments
  }
}

export default connect(mapStateToProps)(App);
>>>>>>> development
