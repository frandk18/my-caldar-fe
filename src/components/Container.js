import React, { Component } from 'react';
import AddNew from './AddNew';
import Title from './layout/Title';
import Table from './Table';
import PropTypes from 'prop-types';

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showForm: false
        };
        this.displayForm = this.displayForm.bind(this);
    }

    // Display new item form
    displayForm = () => {
        this.setState({ showForm: true })
    }

    render() {
        return (
            <div style={containerStyle}>
                <Title />
                {this.state.showForm && <AddNew />}
                <Table data={this.props.data} displayForm={this.displayForm} delItem={this.props.delItem}/>
            </div>
        );
    }
}

Container.propTypes = {
    data: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired,
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '2px #707070 solid',
    borderRadius: '25px',
    padding: '30px 50px 50px 50px'
}