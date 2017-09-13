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

  render() {
    return (
      <TodoForm
        name={this.state.name}
        handleChange={this.handleChange.bind(name)}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

TodoPage.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(TodoPage);
