import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EditOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
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
        this.props.editOne(this.state)
        this.props.hideEdit()
    };

    render(){
        const { company, boilers, name, address, zipcode, contact, phone, email, obs } = this.props.edited[0];
        console.log(this.state)
        return (
            <div style={addnewStyle}> 
                <form style={formStyle} onSubmit={this.handleSubmit}>
                    <div style={{display:'flex'}}>
                        <div style={columnStyle}>
                            <label>Company: </label>
                            <input name="company" defaultValue={company} onChange={this.handleChange}/>
                            
                            <label>Boilers: </label>
                            <input name="boilers" defaultValue={boilers} onChange={this.handleChange}/>

                            <label>Name: </label>
                            <input type="text" name="name" defaultValue={name} onChange={this.handleChange}/>

                            <label>Address: </label>
                            <input type="text" name="address" defaultValue={address} onChange={this.handleChange}/>

                            <label>Zip Code: </label>
                            <input type="text" name="zipcode" defaultValue={zipcode} onChange={this.handleChange}/>
                        </div>
                        <div style={columnStyle}>
                            <label>Contact: </label>
                            <input type="text" name="contact" defaultValue={contact} onChange={this.handleChange}/>

                            <label>Phone: </label>
                            <input type="text" name="phone" defaultValue={phone} onChange={this.handleChange}/>

                            <label>Email: </label>
                            <input type="text" name="email" defaultValue={email} onChange={this.handleChange}/>

                            <label>Observations: </label>
                            <textarea type="text" name="obs" defaultValue={obs} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <button style={btnStyle} type="submit">Confirm</button>
                </form>
            </div>
        );
    }
}

EditOne.propTypes = {
    edited: PropTypes.array.isRequired,
    hideEdit: PropTypes.func.isRequired,
    //editOne: PropTypes.func.isRequired,
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