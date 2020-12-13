import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Buildings from './mocks/buildings.json';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Buildings
    };
  }

  // Delete item from collection
  delItem = (id) => {
    this.setState({ Buildings: [...this.state.Buildings.filter(building => building._id !== id)] })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main data={this.state.Buildings} delItem={this.delItem}/>
      </div>
    );
  }
}
