import {
  CREATE_NEW_TODO__FAILURE,
  CREATE_NEW_TODO__REQUEST,
  CREATE_NEW_TODO__SUCCESS,
  GET_TODOS__FAILURE,
  GET_TODOS__REQUEST,
  GET_TODOS__SUCCESS,
} from './actions';

const initialState = {
  create_request: false,
  get_todos_request: false,
  list: [],
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
    default:
      return state;
  }
}
