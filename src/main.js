import React, {Component} from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store/store';
import TodoApp from './compnents/todoApp';
import expect from 'expect';
import deepFreeze  from 'deep-freeze';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.querySelector('#root')
);