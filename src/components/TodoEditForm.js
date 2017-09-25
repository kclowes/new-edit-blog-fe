import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class TodoEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: props.todo,
      // name: props.todo.name
    };
  }

  handleChange(e) {
    const newTodo = Object.assign({}, this.state.todo, {
      name: e.target.value,
    });

    this.setState({ todo: newTodo });
  }

  handleSubmit(e, todo) {
    e.preventDefault();

    this.props.handleEditSubmit(todo);
  }

  render() {
    const { name } = this.state.todo;

    return (
      <form>
        <input
          id="todo"
          onChange={e => this.handleChange(e)}
          type="text"
          value={name}
        />
        <button onClick={(e, todo) => this.handleSubmit(e, this.state.todo)}>
          Submit
        </button>
      </form>
    );
  }
}

TodoEditForm.propTypes = {
  handleChange: PropTypes.func,
  handleEditSubmit: PropTypes.func,
  todo: PropTypes.object,
};

export default TodoEditForm;
