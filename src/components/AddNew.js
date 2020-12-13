import React, { Component } from 'react';

export default class AddNew extends Component {
    render(){
        return (
            <div style={formStyle}> 
                <form>
                    <label>Company: </label>
                    <input type="text" />

                    <label>Name: </label>
                    <input type="text" />

                    <label>Address: </label>
                    <input type="text" />

                    <label>Zip Code: </label>
                    <input type="text" />

                    <label>Contact: </label>
                    <input type="text" />

                    <label>Phone: </label>
                    <input type="text" />

                    <label>Email: </label>
                    <input type="text" />

                    <button>Add</button>
                </form>
            </div>
        );
    }
}

const formStyle = {
    border: '1px #707070 solid',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '15px',
}