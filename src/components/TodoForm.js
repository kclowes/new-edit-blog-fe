import PropTypes from 'prop-types';
import React from 'react';

const TodoForm = ({ name, handleChange, handleSubmit }) => {
  return (
    <form>
      <input
        id="todo"
        onChange={e => {
          handleChange(e);
        }}
        placeholder="Add Todo"
        type="text"
        value={name}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

TodoForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
};

export default TodoForm;
