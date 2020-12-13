import React, { Component } from 'react';
import Title from './layout/Title';
import Item from './Item';
import PropTypes from 'prop-types';

export default class List extends Component {
    render() {
        return (
            <div style={containerStyle}>
                <Title />
                <table style={tableStyle}>
                    <thead style={theadStyle}>
                        <tr>
                            <th>Company</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Zip Code</th>
                            <th>Contact</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody style={bodyStyle}>
                        {this.props.data.map((row) => (
                            <Item key={row._id.$oid} row={row} delItem={this.props.delItem}/>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

List.propTypes = {
    data: PropTypes.array.isRequired
}

const containerStyle = {
    border: '2px #707070 solid',
    borderRadius: '25px',
    padding: '30px 50px'
}

const tableStyle = {
    border: '1px solid gray',
    textAlign: 'center',
}

const theadStyle = {
    //textAlign: 'center',
    background: '#708DA6',
    color: '#fff',
    //border: '1px solid gray'
}

const bodyStyle = {
    //textAlign: 'center',
}