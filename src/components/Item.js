import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from "react-icons/fa";
import { MdCreate } from "react-icons/md";

export default class Item extends Component {
    render() {
        return (
            <li style={itemStyle}>
                {this.props.row.company +
                ' | ' +
                this.props.row.name +
                ' | ' +
                this.props.row.address +
                ' | ' +
                this.props.row.zipcode +
                ' | ' +
                this.props.row.phone +
                ' | ' +
                this.props.row.contact}
                <div style={btnContainerStyle}>
                    <button style={btnStyle}><MdCreate /></button>
                    <button style={btnStyle}><FaTrash /></button>
                </div>
            </li>
        );
    }
}

Item.propTypes = {
    row: PropTypes.object.isRequired
}

const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    background: '#CED6DC',
    border: '1px #ccc solid',
    color: '#094455',
    padding: '5px',
    margin: '10px',
    listStyleType: 'none'
}

const btnContainerStyle = {
    display: 'flex',
    marginLeft: '15px'
}

const btnStyle = {
    display: 'flex',
    justifyContent: 'center',
    background: '#fff',
    padding: '3px',
    margin: '0 2px',
    borderWidth: '1px',
    borderRadius: '5px'
}