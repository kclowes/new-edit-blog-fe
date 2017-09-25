import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { getTodo, updateTodo } from '../store/todos/actions';

import TodoEditForm from '../components/TodoEditForm';

export class TodoEditPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;

    dispatch(getTodo(match.params.id));
  }

  handleEditSubmit = todo => {
    const { dispatch, history } = this.props;

    dispatch(updateTodo(todo));
    this.setState({ name: '' });

    history.push('/');
  };

  render() {
    if (isEmpty(this.props.todo)) {
      return null;
    }

    return (
      <TodoEditForm
        todo={this.props.todo}
        handleEditSubmit={todo => this.handleEditSubmit(todo)}
        handleChange={e => this.handleChange(e)}
      />
    );
  }
}

TodoEditPage.propTypes = {
  todo: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    todo: state.todos.todo,
  };
}

export default connect(mapStateToProps)(TodoEditPage);
