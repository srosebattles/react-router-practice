import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import GoogleMap from 'google-map-react';
import './App.css';
import MapIcon from './mapicon.js';


class OneStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: {},
      lastSearched: 'http://localhost:3030/stores/'+ this.props.params.id,
    }
  }

  componentDidMount() {
    this.getOneStore()
  }

  getOneStore() {
    axios.get(this.state.lastSearched).then((response) => {
      var newStore = response.data;
      console.log(newStore)
      this.setState({
        store: newStore
      })
    })
  }


  render() {
    return (
      <div>
      {this.state.store.name}
      <div className="mapDiv">
      <GoogleMap
        center={{lat: this.state.store.lat, lng: this.state.store.lng}}
        defaultZoom={9}
      >
        <MapIcon lat={this.state.store.lat} lng={this.state.store.lng} text={'A'} />
      </GoogleMap>
      </div>
      </div>
  )}

}

export default OneStore;
