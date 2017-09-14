import React from 'react';

const TodosList = ({ history, todos }) => {
  const routeToEdit = id => {
    history.push(`/todos/${id}/edit`);
  };

  const renderTodoList = () => {
    return todos.map((todo, i) => {
      return (
        <li key={i}>
          {todo.name}
          <button onClick={() => routeToEdit(todo.id)}>Edit</button>
        </li>
      );
    });
  };

  return (
    <ul>
      {renderTodoList()}
    </ul>
  );
};

export default TodosList;
