import React, { Component } from 'react';
import logo from './2cents.png';
// import './App.css';

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

class App extends Component {
  render() {
    return (
      <div style={bodyStyle} className="App">
        <header className="App-header">
          <img style={imgStyle} src={logo} alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
