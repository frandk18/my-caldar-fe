import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from "react-icons/fa";
import { MdCreate } from "react-icons/md";

export default class Row extends Component {
    render() {
        const { _id, company, name, address, zipcode, contact, phone, email } = this.props.row;
        return (
            <tr style={rowStyle}>
                <td style={cellStyle}>{company}</td>
                <td style={cellStyle}>{name}</td>
                <td style={cellStyle}>{address}</td>
                <td style={cellStyle}>{zipcode}</td>
                <td style={cellStyle}>{contact}</td>
                <td style={cellStyle}>{phone}</td>
                <td style={cellStyle}>{email}</td>
                <td style={cellStyle}>
                    <div style={btnContainerStyle}>
                        <button style={btnStyle}><MdCreate /></button>
                        <button onClick={this.props.delItem.bind(this, _id)} style={btnStyle}><FaTrash /></button>
                    </div>
                </td>
            </tr>
        );
    }
}

Row.propTypes = {
    row: PropTypes.object.isRequired,
    delItem: PropTypes.func.isRequired,
}

const cellStyle = {
    padding: '5px 20px'
}

const rowStyle = {
    background: '#CED6DC',
    lineHeight: '25px',
    border: '1px #707070 solid',
}

const btnContainerStyle = {
    display: 'flex'
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