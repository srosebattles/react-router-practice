import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome! Hope you find this page useful.</h2>
        </div>
        <div className="navDiv">
          <ul className="nav">
            <li className="navItem"><Link to={'/'}>Home</Link></li>
            <li className="navItem"><Link to={'/about'}>About</Link></li>
            <li className="navItem"><Link to={'/stores'}>Stores</Link></li>
          </ul>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
