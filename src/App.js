import React, { Component } from 'react';
import {Link} from 'react-router'
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      storeList: this.props.storeList,
      id: '',
      name: '',
      type: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      lat: '',
      long: '',
      hours: '',
      lastSearched: 'http://localhost:3030/stores'
}

componentDidMount() {
    this.getStoreList()
}

getStoreList() {
  axios.get(this.state.lastSearched)
  .then((response) => {
    var newStoreList = response.data.data.slice(0);
    this.setState({
      storeList: newStoreList
    })
  })
  .catch((error) => {
    alert(error);
    console.log(error);
  });
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome! Hope you find this page useful.</h2>
        </div>
        <div>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/stores'}>Stores</Link></li>
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
