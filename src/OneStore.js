import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router'
import './App.css';

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
      <div>{this.state.store.name}</div>
  )}

}

export default OneStore;
