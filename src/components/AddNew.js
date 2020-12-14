import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '4354',
            company: '',
            boilers: '',
            name: '',
            address: '',
            zipcode: '',
            contact: '',
            phone: '',
            email: '',
            obs: ''
        };
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.newOne(this.state)
        this.props.hideForm()
    };

    render(){
        return (
            <div style={addnewStyle}> 
                <form style={formStyle} onSubmit={this.handleSubmit}>
                    <div style={{display:'flex'}}>
                        <div style={columnStyle}>
                            <label>Company: </label>
                            <select name="company" value={this.state.company} onChange={this.handleChange}></select>
                            
                            <label>Boilers: </label>
                            <select name="boilers" value={this.state.boilers} onChange={this.handleChange}></select>

                            <label>Name: </label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>

                            <label>Address: </label>
                            <input type="text" name="address" value={this.state.address} onChange={this.handleChange}/>

                            <label>Zip Code: </label>
                            <input type="text" name="zipcode" value={this.state.zipcode} onChange={this.handleChange}/>
                        </div>
                        <div style={columnStyle}>
                            <label>Contact: </label>
                            <input type="text" name="contact" value={this.state.contact} onChange={this.handleChange}/>

                            <label>Phone: </label>
                            <input type="number" name="phone" value={this.state.phone} onChange={this.handleChange}/>

                            <label>Email: </label>
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>

                            <label>Observations: </label>
                            <textarea type="text" name="obs" value={this.state.obs} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <button style={btnStyle} type="submit">Confirm</button>
                </form>
            </div>
        );
    }
}

AddNew.propTypes = {
    newOne: PropTypes.func.isRequired,
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