import Todo from '../../services/todos';

export const CREATE_NEW_TODO__REQUEST = 'CREATE_NEW_TODO__REQUEST';
export const CREATE_NEW_TODO__SUCCESS = 'CREATE_NEW_TODO__SUCCESS';
export const CREATE_NEW_TODO__FAILURE = 'CREATE_NEW_TODO__FAILURE';
export const GET_TODOS__REQUEST = 'GET_TODOS__REQUEST';
export const GET_TODOS__SUCCESS = 'GET_TODOS__SUCCESS';
export const GET_TODOS__FAILURE = 'GET_TODOS__FAILURE';

export function createNewTodo(name) {
  return async dispatch => {
    dispatch(createNewTodoRequest());
    try {
      const response = await Todo.create(name);

      if (response.status === 201) {
        dispatch(createNewTodoSuccess());
        dispatch(getTodos());
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

function getTodos() {
  return async dispatch => {
    dispatch(getTodosRequest());
    try {
      const data = await Todo.getTodos();
      dispatch(getTodosSuccess(data));
    } catch (err) {
      console.log(err);
      dispatch(getTodosFailure());
    }
  };
}

function getTodosRequest() {
  return { type: GET_TODOS__REQUEST };
}

function getTodosSuccess(todos) {
  return { type: GET_TODOS__SUCCESS, todos };
}

function getTodosFailure() {
  return { type: GET_TODOS__FAILURE };
}
