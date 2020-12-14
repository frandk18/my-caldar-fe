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

    // Display new item form
    hideForm = () => {
        this.setState({ showForm: false })
    }

    render() {
        return (
            <div style={containerStyle}>
                <Title />
                {this.state.showForm && <AddNew newOne={this.props.addItem} hideForm={this.hideForm}/>}
                <Table data={this.props.data} displayForm={this.displayForm} delItem={this.props.delItem}/>
            </div>
        );
    }
}

Container.propTypes = {
    data: PropTypes.array.isRequired,
    delItem: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px #707070 solid',
    borderRadius: '25px',
    padding: '30px 50px 50px 50px'
}