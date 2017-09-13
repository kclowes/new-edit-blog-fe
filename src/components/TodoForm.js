import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';

const TodoForm = ({ name, handleChange, handleSubmit }) => {
  return (
    <form>
      <TextField
        id="todo"
        label="Add Todo"
        onChange={name => {
          handleChange(name);
        }}
        value={name}
      />
      <Button label="Submit" raised secondary onClick={handleSubmit} />
    </form>
  );
};

TodoForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
};

export default TodoForm;
