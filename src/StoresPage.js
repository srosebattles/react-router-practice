import React, { Component } from 'react';
import './App.css';

class StoresPage extends Component {




  render() {
    return (
        <div>
        <h1>Stores</h1>
        <ul>
        {this.props.storeList.map((store, index) => {
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
