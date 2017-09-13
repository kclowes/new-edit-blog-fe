import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import todos from './todos/reducer';

const root = combineReducers({
  todos,
  router: routerReducer,
});

export default root;
