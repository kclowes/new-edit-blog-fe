import {
  CREATE_NEW_TODO__FAILURE,
  CREATE_NEW_TODO__REQUEST,
  CREATE_NEW_TODO__SUCCESS,
  GET_TODOS__FAILURE,
  GET_TODOS__REQUEST,
  GET_TODOS__SUCCESS,
  UPDATE_TODO__FAILURE,
  UPDATE_TODO__REQUEST,
  UPDATE_TODO__SUCCESS,
  GET_TODO__FAILURE,
  GET_TODO__REQUEST,
  GET_TODO__SUCCESS,
} from './actions';

const initialState = {
  create_request: false,
  get_todos_request: false,
  get_todo_request: false,
  list: [],
  todo: {},
  update_request: false,
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_TODO__REQUEST:
      return Object.assign({}, state, {
        create_request: true,
      });
    case CREATE_NEW_TODO__SUCCESS:
      return Object.assign({}, state, {
        create_request: false,
      });
    case CREATE_NEW_TODO__FAILURE:
      return Object.assign({}, state, {
        create_request: false,
      });
    case GET_TODOS__REQUEST:
      return Object.assign({}, state, {
        get_todos_request: true,
      });
    case GET_TODOS__SUCCESS:
      return Object.assign({}, state, {
        list: action.todos,
        get_todos_request: false,
      });
    case GET_TODOS__FAILURE:
      return Object.assign({}, state, {
        get_todos_request: false,
      });
    case UPDATE_TODO__REQUEST:
      return Object.assign({}, state, {
        update_request: true,
      });
    case UPDATE_TODO__SUCCESS:
      return Object.assign({}, state, {
        update_request: false,
      });
    case UPDATE_TODO__FAILURE:
      return Object.assign({}, state, {
        update_request: false,
      });
    case GET_TODO__REQUEST:
      return Object.assign({}, state, {
        get_todo_request: true,
      });
    case GET_TODO__SUCCESS:
      return Object.assign({}, state, {
        todo: action.todo,
        get_todo_request: false,
      });
    case GET_TODO__FAILURE:
      return Object.assign({}, state, {
        get_todo_request: false,
      });
    default:
      return state;
  }
}
