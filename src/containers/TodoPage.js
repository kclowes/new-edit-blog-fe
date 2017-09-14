import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

import { createNewTodo, getTodos, updateTodo } from '../store/todos/actions';

import TodoForm from '../components/TodoForm';
import TodoEditForm from '../components/TodoEditForm';
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

  todoToEdit = () => {
    const { match, todos } = this.props;

    const wantedTodo = todos.filter(
      todo => todo.id === parseInt(match.params.id, 10)
    );
    return wantedTodo[0];
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = () => {
    this.props.dispatch(createNewTodo(this.state.name));
    this.setState({ name: '' });
  };

  handleEditSubmit = todo => {
    const { dispatch, history } = this.props;

    dispatch(updateTodo(todo));
    history.push('/');
  };

  render() {
    const { history, todos } = this.props;

    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => {
              return (
                <div>
                  <TodoForm
                    {...routerProps}
                    name={this.state.name}
                    handleChange={e => this.handleChange(e)}
                    handleSubmit={this.handleSubmit}
                  />
                  <TodosList history={history} todos={todos} />
                </div>
              );
            }}
          />
          <Route
            exact
            path="/todos/:id/edit"
            render={routerProps => (
              <TodoEditForm
                {...routerProps}
                todo={this.todoToEdit()}
                handleEditSubmit={todo => this.handleEditSubmit(todo)}
              />
            )}
          />
        </Switch>
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
