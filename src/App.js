import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Buildings from './mocks/buildings.json';

export default class App extends Component {

  state = {
    Buildings
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Main data={this.state.Buildings}/>
      </div>
    );
  }
}
