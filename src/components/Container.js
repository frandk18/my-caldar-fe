import React, { Component } from 'react';
import BuildingForm from './BuildingForm';
import Title from './layout/Title';
import Table from './Table';
import PropTypes from 'prop-types';

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showForm: false,
          editing: false,
          edited: [],
        };
        this.displayForm = this.displayForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }

    // Display Form
    displayForm = (id) => {
        const building = this.props.buildings.filter(building => building._id === id);
        if (Object.keys(building).length !== 0) {
            this.setState({ showForm: true , editing: true, edited: building })
        } else {
            this.setState({ showForm: true , editing: false, edited: [] })
        }
    }

    // Hide Form
    hideForm = () => {
        this.setState({ showForm: false, editing: false, edited: [] })
    }

    render() {
        return (
            <div style={containerStyle}>
                <Title />
                {this.state.showForm && <BuildingForm buildings={this.props.buildings}  boilers={this.props.boilers} addItem={this.props.addItem} editItem={this.props.editItem} editing={this.state.editing} editedItem={this.state.edited} displayForm={this.displayForm} hideForm={this.hideForm} />}
                <Table buildings={this.props.buildings} displayForm={this.displayForm} hideForm={this.hideForm} delItem={this.props.delItem}/>
            </div>
        );
    }
}

Container.propTypes = {
    buildings: PropTypes.array.isRequired,
    boilers: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired,
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px #707070 solid',
    borderRadius: '25px',
    padding: '30px 50px 50px 50px'
}