import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { getTodo, updateTodo } from '../store/todos/actions';

import TodoEditForm from '../components/TodoEditForm';

export class TodoEditPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: props.todo,
    };
  }

  componentDidMount() {
    const { dispatch, match } = this.props;

    dispatch(getTodo(match.params.id));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.todo !== nextProps.todo) {
      this.setState({
        todo: nextProps.todo,
      });
    }
  }

  handleEditSubmit = todo => {
    const { dispatch, history } = this.props;

    dispatch(updateTodo(todo));

    history.push('/');
  };

  render() {
    const { todo } = this.state;

    if (isEmpty(todo)) {
      return null;
    }

    return (
      <TodoEditForm
        todo={todo}
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
