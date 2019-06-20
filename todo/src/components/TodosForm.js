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
        console.log(this.props.todos)
        return(
            <div>
                {this.props.todos.map((todo) => (
                <h1>{todo.value}</h1>
                ))}
                <input
                    type='text'
                    name='newItem'
                    value={this.state.newItem}
                    onChange={this.handleChanges}
                />
                <button onClick={this.addItem}>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.todos)
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps,
    { addItem }
)(TodosForm)