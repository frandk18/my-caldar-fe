import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from "react-icons/fa";
import { MdCreate } from "react-icons/md";

export default class Item extends Component {
    render() {
        const { _id, company, name, address, zipcode, contact, phone, email } = this.props.row;
        return (
            <tr style={rowStyle}>
                <td>{company}</td>
                <td>{name}</td>
                <td>{address}</td>
                <td>{zipcode}</td>
                <td>{contact}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>
                    <div style={btnContainerStyle}>
                        <button style={btnStyle}><MdCreate /></button>
                        <button onClick={this.props.delItem.bind(this, _id)} style={btnStyle}><FaTrash /></button>
                    </div>
                </td>
            </tr>
        );
    }
}

Item.propTypes = {
    row: PropTypes.object.isRequired
}

const rowStyle = {
    background: '#CED6DC',
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