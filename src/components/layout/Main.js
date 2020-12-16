import React, { Component } from 'react';
import Container from '../Container';
import PropTypes from 'prop-types';

export default class Main extends Component {
    render() {
        return (
            <main style={mainStyle}>
                <Container data={this.props.data} delItem={this.props.delItem} addItem={this.props.addItem} editItem={this.props.editItem}/>
            </main>
        );
    }
}

Main.propTypes = {
    data: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
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