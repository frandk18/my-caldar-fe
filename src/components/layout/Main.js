import React, { Component } from 'react';
import List from '../List';
import PropTypes from 'prop-types';

export default class Main extends Component {
    render() {
        return (
            <main style={mainStyle}>
                <List data={this.props.data} delItem={this.props.delItem}/>
            </main>
        );
    }
}

Main.propTypes = {
    data: PropTypes.array.isRequired
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