import React, { Component } from 'react';
import Table from '../Table';
import PropTypes from 'prop-types';

export default class Main extends Component {
    render() {
        return (
            <main style={mainStyle}>
                <Table data={this.props.data} addItem={this.props.addItem} delItem={this.props.delItem}/>
            </main>
        );
    }
}

Main.propTypes = {
    data: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
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