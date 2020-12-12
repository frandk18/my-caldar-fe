import React, { Component } from 'react';
import List from '../List';
import PropTypes from 'prop-types';

export default class Main extends Component {
    render() {
        return (
            <main style={mainStyle}>
                <List data={this.props.data} />
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

/*const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: '#fff',
    height: 'auto',
    width: '100%',
    alingItems: 'center',
    padding: '10px'
}*/

//#708DA6
//#8F8F8F
//#CED6DC
//#AFB896