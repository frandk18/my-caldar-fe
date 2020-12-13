import React, { Component } from 'react';
import Title from './layout/Title';
import Row from './Row';
import PropTypes from 'prop-types';
import { MdSearch, MdPersonAdd } from "react-icons/md";

export default class Table extends Component {

    constructor(props){
        super(props);

        this.state = {
            showForm: false
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick () {
        this.setState({ showForm: true });
    }

    renderForm () {
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

    render() {

        const { showForm } = this.state;

        return (
            <div style={containerStyle}>
                <Title />
                {showForm && this.renderForm()}
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
                                    <button onClick={ this.onClick } style={btnStyle}><MdPersonAdd /></button>
                                    <button style={btnStyle}><MdSearch /></button>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody style={bodyStyle}>
                        {this.props.data.map((row) => (
                            <Row key={row._id.$oid} row={row} delItem={this.props.delItem}/>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

Table.propTypes = {
    data: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired,
}

const formStyle = {
    border: '1px #707070 solid',
    padding: '10px',
    marginBottom: '20px'
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '2px #707070 solid',
    borderRadius: '25px',
    padding: '30px 50px 50px 50px'
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