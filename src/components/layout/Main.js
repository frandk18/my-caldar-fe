import React, { Component } from 'react';
import Container from '../Container';
import PropTypes from 'prop-types';

export default class Main extends Component {
    render() {
        return (
            <main style={mainStyle}>
                <Container buildings={this.props.buildings} boilers={this.props.boilers} addItem={this.props.addItem} editItem={this.props.editItem} delItem={this.props.delItem}/>
            </main>
        );
    }
}

Main.propTypes = {
    buildings: PropTypes.array.isRequired,
    boilers: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired,
}

const mainStyle = {
    display: 'flex',
    justifyContent: 'center',
    background: '#fff',
    height: 'auto',
    width: '100%',
    alingItems: 'center',
    padding: '10px'
}