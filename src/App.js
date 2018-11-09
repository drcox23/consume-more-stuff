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

// const bodyStyle = {
//   backgroundColor: 'lightcoral',
//   width: '100%',
//   height: '100%',
//   margin: '0'
// }

// const imgStyle = {
//   margin: '30px',
//   width: '100px',
// }

// // const navStyle = {
// //   width: '100%',
// // }

// const loginBtnStyle = {
//   width: '120px',
//   margin: '50px 0',
//   marginRight: '20px',
//   height: '30px',
//   fontSize: '1.2em',
//   float: 'right',
//   hover: 
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
        </link>

        <header className="App-header">

          {/* Navigation */}
          <img src={logo} alt="logo" />
        </header>
        <Router>
          <div>

            {/* Routing Links and Routes */}

            <Link to="/">
              <button type="button">Home</button>
            </Link>

            <Link to="/login">
              <button type="button">Login <i class="fas fa-sign-in-alt"></i></button>
            </Link>

            <Route exact path="/" component={PostsBoard} />
            <Route path="/login" component={Login} />
            {/* <Route path="/login" /> */}

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
