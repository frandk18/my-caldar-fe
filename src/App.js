import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Buildings from './mocks/buildings.json';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Buildings,
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

  // Add item from collection
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
        <Main data={this.state.Buildings} addItem={this.addItem} delItem={this.delItem} editItem={this.editItem}/>
      </div>
    );
  }
}
