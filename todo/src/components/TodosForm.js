import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../actions';

class TodosForm extends React.Component {
    state = {
        newItem: ''
    }

    handleChanges = e => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    };

    addItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({ newItem: '' });
    }

    render() {
        return(
            <div>
                <h1>{this.props.todos}</h1>
                <input
                    type='text'
                    name='newItem'
                    value={this.state.todos}
                    onChange={this.handleChanges}
                />
                <button onClick={this.addItem}>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps,
    { addItem }
)(TodosForm)