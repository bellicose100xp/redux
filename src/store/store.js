/**
 * Created by admin on 12/3/2015.
 */
import todos from '../reducers/todosReducer';
import visibilityFilter from '../reducers/visibilityReducer'

import {createStore, combineReducers} from 'redux';

const todoApp = combineReducers({todos, visibilityFilter});
const store = createStore(todoApp);

export default store;