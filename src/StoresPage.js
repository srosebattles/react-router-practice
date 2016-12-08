import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class StoresPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      storeList: [],
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
        <div>
        <h1>Stores</h1>
        <ul>
        {this.state.storeList.map((store, index) => {
          return (
            <li key={store.id}>
              <span>{store.name}</span>
              <br />
              <span>{store.address}</span>
              <br />
              <span>{store.city}, {store.state}</span>
              <br />
              <span>{store.hours}</span>
              <br />
            </li>
          )
        })}
        </ul>
        </div>

    );
  }
}

export default StoresPage;
