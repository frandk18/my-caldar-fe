import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {v4 as uuid} from 'uuid';

export default class BuildingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: this.props.editing ? this.props.editedItem[0]._id : uuid(),
            company: this.props.editing ? this.props.editedItem[0].company : '',
            boilers: this.props.editing ? this.props.editedItem[0].boilers : '',
            name: this.props.editing ? this.props.editedItem[0].name : '',
            address: this.props.editing ? this.props.editedItem[0].address : '',
            zipcode: this.props.editing ? this.props.editedItem[0].zipcode : '',
            contact: this.props.editing ? this.props.editedItem[0].contact : '',
            phone: this.props.editing ? this.props.editedItem[0].phone : '',
            email: this.props.editing ? this.props.editedItem[0].email : '',
            obs: this.props.editing ? this.props.editedItem[0].obs : '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.hideForm()
        if (!this.props.editing) {
            this.props.addItem(this.state)
        } else {
            this.props.editItem(this.state)
        }
    };

    render(){
        const { company, boilers, name, address, zipcode, contact, phone, email, obs } = this.state;
        return (
            <div style={addnewStyle}> 
                <form style={formStyle} onSubmit={this.handleSubmit}>
                    <div style={{display:'flex'}}>
                        <div style={columnStyle}>
                            <label>Company: </label>
                            <select name="company" value={company} onChange={this.handleChange}>
                                <option disabled hidden>{'Select a company'}</option>
                                {this.props.data.map((building, index) => {
                                    return <option key={index} value={building.company}>{building.company}</option>
                                })}
                            </select>
                            
                            <label>Boilers: </label>
                            <select name="boilers" value={boilers} onChange={this.handleChange}></select>

                            <label>Name: </label>
                            <input type="text" name="name" value={name} onChange={this.handleChange}/>

                            <label>Address: </label>
                            <input type="text" name="address" value={address} onChange={this.handleChange}/>

                            <label>Zip Code: </label>
                            <input type="text" name="zipcode" value={zipcode} onChange={this.handleChange}/>
                        </div>
                        <div style={columnStyle}>
                            <label>Contact: </label>
                            <input type="text" name="contact" value={contact} onChange={this.handleChange}/>

                            <label>Phone: </label>
                            <input type="text" name="phone" value={phone} onChange={this.handleChange}/>

                            <label>Email: </label>
                            <input type="text" name="email" value={email} onChange={this.handleChange}/>

                            <label>Observations: </label>
                            <textarea type="text" name="obs" value={obs} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <button style={btnStyle} type="submit">Confirm</button>
                </form>
            </div>
        );
    }
}

BuildingForm.propTypes = {
    data: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    editing: PropTypes.bool.isRequired,
    editedItem: PropTypes.array.isRequired,
    displayForm: PropTypes.func.isRequired,
    hideForm: PropTypes.func.isRequired, 
}

const addnewStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#CED6DC',
    border: '1px #707070 solid',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '15px',
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '15px',
}

const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px'
}

const btnStyle = {
    display: 'flex',
    justifyContent: 'center',
    background: '#fff',
    padding: '5px',
    margin: '0 3px',
    borderWidth: '1px',
    borderRadius: '5px',
    overflow: 'hidden',
    cursor: 'pointer',
}