import Todo from '../../services/todos';

export const CREATE_NEW_TODO__REQUEST = 'CREATE_NEW_TODO__REQUEST';
export const CREATE_NEW_TODO__SUCCESS = 'CREATE_NEW_TODO__SUCCESS';
export const CREATE_NEW_TODO__FAILURE = 'CREATE_NEW_TODO__FAILURE';
export const GET_TODOS__REQUEST = 'GET_TODOS__REQUEST';
export const GET_TODOS__SUCCESS = 'GET_TODOS__SUCCESS';
export const GET_TODOS__FAILURE = 'GET_TODOS__FAILURE';
export const UPDATE_TODO__REQUEST = 'UPDATE_TODO__REQUEST';
export const UPDATE_TODO__SUCCESS = 'UPDATE_TODO__SUCCESS';
export const UPDATE_TODO__FAILURE = 'UPDATE_TODO__FAILURE';

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

export function getTodos() {
  return async dispatch => {
    dispatch(getTodosRequest());
    try {
      const data = await Todo.getTodos();
      dispatch(getTodosSuccess(data));
    } catch (err) {
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

export function updateTodo(id) {
  return async dispatch => {
    dispatch(updateTodoRequest());
    try {
      const response = await Todo.updateTodo(id);

      if (response.status === 200) {
        dispatch(updateTodoSuccess());
        dispatch(getTodos());
      } else {
        dispatch(updateTodoFailure());
      }
    } catch (err) {
      console.log(err);
      dispatch(updateTodoFailure());
    }
  };
}

function updateTodoRequest() {
  return { type: UPDATE_TODO__REQUEST };
}

function updateTodoSuccess(todos) {
  return { type: UPDATE_TODO__SUCCESS, todos };
}

function updateTodoFailure() {
  return { type: UPDATE_TODO__FAILURE };
}
