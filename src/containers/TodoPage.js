import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createNewTodo, getTodos } from '../store/todos/actions';

import TodoForm from '../components/TodoForm';
import TodosList from '../components/TodosList';

export class TodoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(getTodos());
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = () => {
    this.props.dispatch(createNewTodo(this.state.name));
    this.setState({ name: '' });
  };

  render() {
    const { history, todos } = this.props;

    return (
      <div>
        <TodoForm
          name={this.state.name}
          handleChange={e => this.handleChange(e)}
          handleSubmit={this.handleSubmit}
        />
        <TodosList history={history} todos={todos} />
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
