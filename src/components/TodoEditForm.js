import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class TodoEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: props.todo,
    };
  }

  handleChange(e) {
    const newTodo = Object.assign({}, this.props.todo, {
      name: e.target.value,
    });
    this.setState({ todo: newTodo });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.handleEditSubmit(this.state.todo);
  }

  render() {
    const { name } = this.state.todo;

    return (
      <form>
        <input
          id="todo"
          onChange={e => {
            this.handleChange(e);
          }}
          type="text"
          value={name}
        />
        <button onClick={e => this.handleSubmit(e)}>Submit</button>
      </form>
    );
  }
}
