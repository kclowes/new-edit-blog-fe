import {
  CREATE_NEW_TODO__FAILURE,
  CREATE_NEW_TODO__REQUEST,
  CREATE_NEW_TODO__SUCCESS,
} from './actions';

const initialState = {
  requesting: false,
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_TODO__REQUEST:
      return Object.assign({}, state, {
        requesting: true,
      });
    case CREATE_NEW_TODO__SUCCESS:
      return Object.assign({}, state, {
        requesting: false,
      });
    case CREATE_NEW_TODO__FAILURE:
      return Object.assign({}, state, {
        requesting: false,
      });
    default:
      return state;
  }
}
