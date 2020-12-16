import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Buildings from './mocks/buildings.json';
import Boilers from './mocks/boilers.json';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Buildings,
      Boilers,
    };
  }

  // Delete item from collection
  delItem = (id) => {
    this.setState({ Buildings: [...this.state.Buildings.filter(building => building._id !== id)] });
  }

  // Add item from collection
  addItem = (newItem) => {
    this.setState({ Buildings: [...this.state.Buildings, newItem] });
  }

  // Edit item from collection
  editItem = (editedItem) => {
    this.setState({
      Buildings: [...this.state.Buildings.map((building) => {
        if (building._id === editedItem._id) {
          building = editedItem;
        }
        return building;
      })]
    });
  }  

  render() {
    return (
      <div className="App">
        <Header />
        <Main buildings={this.state.Buildings} boilers={this.state.Boilers} addItem={this.addItem} editItem={this.editItem} delItem={this.delItem}/>
      </div>
    );
  }
}
