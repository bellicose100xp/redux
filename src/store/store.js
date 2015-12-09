/**
 * Created by admin on 12/3/2015.
 */
import todos from '../reducers/todosReducer';
import visibilityFilter from '../reducers/visibilityReducer';
import busyReducer from '../reducers/busyReducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();
import {createStore, combineReducers, applyMiddleware } from 'redux';

const rootReducer = combineReducers({todos, visibilityFilter, busyReducer});

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore);

const configureStore = initialState => createStoreWithMiddleware(rootReducer, initialState);

export default configureStore();