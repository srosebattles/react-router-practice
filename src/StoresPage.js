import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router'
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
        <div>
        <ul>
        {this.state.storeList.map((store, index) => {
          return (
            <li key={store.id}>
              <Link to={`/stores/${store.id}`}><span>{store.name}</span></Link>
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
        </div>

    );
  }
}

export default StoresPage;
