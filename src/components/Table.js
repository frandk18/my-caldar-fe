import React, { Component } from 'react';
import Row from './Row';
import PropTypes from 'prop-types';
import { MdSearch, MdPersonAdd } from "react-icons/md";

export default class Table extends Component {
    render() {
        return (
            <table style={tableStyle}>
                <thead>
                    <tr style={headerStyle}>
                        <th>Company</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Zip Code</th>
                        <th>Contact</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>
                            <div style={btnContainerStyle}>
                                <button onClick={this.props.displayForm} style={btnStyle}><MdPersonAdd /></button>
                                <button style={btnStyle}><MdSearch /></button>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody style={bodyStyle}>
                    {this.props.buildings.map((building, index) => (
                        <Row key={index} row={building} editItem={this.props.displayForm} delItem={this.props.delItem}/>
                    ))}
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    buildings: PropTypes.array.isRequired,
    displayForm: PropTypes.func.isRequired,
    hideForm: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired,
}

const tableStyle = {
    border: '1px solid gray',
    textAlign: 'center',
}

const headerStyle = {
    background: '#708DA6',
    color: '#fff',
    lineHeight: '40px',
}

const bodyStyle = {
}

const btnContainerStyle = {
    display: 'flex',
    justifyContent: 'center'
}

const btnStyle = {
    display: 'flex',
    justifyContent: 'center',
    background: '#fff',
    padding: '4px',
    margin: '0 3px',
    borderWidth: '1px',
    borderRadius: '5px',
    overflow: 'hidden',
    cursor: 'pointer'
}