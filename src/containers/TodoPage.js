import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createNewTodo } from '../store/todos/actions';

import TodoForm from '../components/TodoForm';

export class TodoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  handleChange = name => {
    this.setState({ name });
  };

  handleSubmit = () => {
    this.props.dispatch(createNewTodo(this.state.name));
    this.setState({ name: '' });
  };

  renderTodoList() {
    const { todos } = this.props;
    return todos.map((todo, i) => {
      return (
        <li key={i}>
          {todo.name}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <TodoForm
          name={this.state.name}
          handleChange={this.handleChange.bind(name)}
          handleSubmit={this.handleSubmit}
        />
        <ul>
          {this.renderTodoList()}
        </ul>
      </div>
    );
  }
}

TodoPage.propTypes = {
  dispatch: PropTypes.func,
  todos: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    todos: state.todos.list,
  };
}

export default connect(mapStateToProps)(TodoPage);
