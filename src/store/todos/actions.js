import Todo from '../../services/todos';

export const CREATE_NEW_TODO__REQUEST = 'CREATE_NEW_TODO__REQUEST';
export const CREATE_NEW_TODO__SUCCESS = 'CREATE_NEW_TODO__SUCCESS';
export const CREATE_NEW_TODO__FAILURE = 'CREATE_NEW_TODO__FAILURE';

export function createNewTodo(name) {
  return async dispatch => {
    dispatch(createNewTodoRequest());
    try {
      const response = await Todo.create(name);

      if (response.status === 201) {
        dispatch(createNewTodoSuccess());
      } else {
        dispatch(createNewTodoFailure());
      }
    } catch (err) {
      console.log(err);
      dispatch(createNewTodoFailure());
    }
  };
}

function createNewTodoRequest() {
  return { type: CREATE_NEW_TODO__REQUEST };
}

function createNewTodoSuccess() {
  return { type: CREATE_NEW_TODO__SUCCESS };
}

function createNewTodoFailure() {
  return { type: CREATE_NEW_TODO__FAILURE };
}
