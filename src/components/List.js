import React, { Component } from 'react';
import Title from './layout/Title';
import Item from './Item';
import PropTypes from 'prop-types';

export default class List extends Component {
    render() {
        return (
            <div>
                <Title />
                {this.props.data.map((row) => (
                    <Item key={row._id.$oid} row={row} />
                ))}
            </div>
        );
    }
}

List.propTypes = {
    data: PropTypes.array.isRequired
}