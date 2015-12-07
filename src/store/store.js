/**
 * Created by admin on 12/3/2015.
 */
import todos from '../reducers/todosReducer';
import visibilityFilter from '../reducers/visibilityReducer'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();
import {createStore, combineReducers, applyMiddleware } from 'redux';

const rootReducer = combineReducers({todos, visibilityFilter});

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore);

const configureStore = initialState => createStoreWithMiddleware(rootReducer, initialState);

export default configureStore();